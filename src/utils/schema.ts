import {
  personSchema,
  organizationSchema,
  websiteSchema,
  webPageSchema,
  aboutPageSchema,
  contactPageSchema,
  breadcrumbSchema,
  softwareAppSchema,
  webApiSchema,
} from '@vijayhardaha/schema-builder';

import { SITE_CONFIG } from '@/constants/seo';
import { getCanonicalUrl } from '@/utils/seo';

// Utility types and functions for building Schema.org structured data across the site.
type AnyObject = Record<string, boolean | number | string | string[] | number | object | object[]>;

/**
 * Top-level options for `generateMasterSchema` which composes multiple
 * Schema.org entities appropriate for a given page on the site.
 */
interface MasterSchemaOptions {
  title: string;
  description: string;
  path: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage';
  isSoftware?: boolean;
  isApi?: boolean;
  breadcrumbs?: { name: string; path: string }[];
  extraOptions?: AnyObject;
}

/**
 * Compose a list of Schema.org entities for a page based on `options`.
 *
 * The returned array contains the canonical `Person`, `Organization`,
 * `WebSite` and a `WebPage` entry and will conditionally include
 * `BreadcrumbList`, `WebApplication` or `SoftwareSourceCode` depending
 * on the provided `pageType` and `isApp` flags.
 *
 * @param {MasterSchemaOptions} options Configuration describing the page.
 * @returns {Array<AnyObject>} An array of schema objects suitable for JSON-LD injection.
 */
export function generateMasterSchema(options: MasterSchemaOptions): Array<AnyObject> {
  const {
    title,
    description,
    path = '',
    isApi = false,
    isSoftware = false,
    pageType = 'WebPage',
    breadcrumbs = [],
    extraOptions = {},
  } = options;

  const canonicalUrl = getCanonicalUrl(path);
  const rootUrl = getCanonicalUrl('');
  const isHome = path === '' || path === '/';

  // IDs used by some schema types (omit on homepage)
  let mainEntityId: string | undefined;
  if (!isHome) {
    if (pageType === 'AboutPage' || pageType === 'ContactPage') {
      mainEntityId = `${rootUrl}#organization`;
    } else if (isSoftware) {
      mainEntityId = `${canonicalUrl}#app`;
    } else {
      mainEntityId = `${rootUrl}#website`;
    }
  }

  const result: AnyObject[] = [];

  // Core entities
  result.push(personSchema({ rootUrl }));

  result.push(organizationSchema({ rootUrl }, { ...SITE_CONFIG.organization, foundingDate: '2025' }));

  result.push(
    websiteSchema(
      { rootUrl },
      { name: SITE_CONFIG.name, description: SITE_CONFIG.description, alternativeName: SITE_CONFIG.name }
    )
  );

  // Page-specific entities
  if (pageType === 'WebPage') {
    result.push(webPageSchema({ rootUrl, path, breadcrumb: true, mainEntityId }, { name: title, description }));
  } else if (pageType === 'AboutPage') {
    result.push(aboutPageSchema({ rootUrl, path, breadcrumb: true, mainEntityId }, { name: title, description }));
  } else if (pageType === 'ContactPage') {
    result.push(contactPageSchema({ rootUrl, path, breadcrumb: true, mainEntityId }, { name: title, description }));
  }

  // Breadcrumbs (skip on homepage)
  if (!isHome) {
    const fullBreadcrumbs = [{ name: 'Home', path: '' }, ...breadcrumbs.filter((b) => b.path !== '' && b.path !== '/')];
    result.push(breadcrumbSchema({ rootUrl, items: fullBreadcrumbs }));
  }

  // Software/app specific schemas
  if (isSoftware) {
    result.push(
      softwareAppSchema(
        { rootUrl, path, price: (extraOptions?.price as number) || undefined },
        {
          name: title,
          description,
          applicationCategory: (extraOptions?.applicationCategory as string) || undefined,
          applicationSubCategory: (extraOptions?.applicationSubCategory as string) || undefined,
          downloadUrl: (extraOptions?.downloadUrl as string) || undefined,
          installUrl: (extraOptions?.installUrl as string) || undefined,
          softwareRequirements: (extraOptions?.requirements as string) || undefined,
          softwareVersion: (extraOptions?.version as string) || undefined,
          isBasedOn: (extraOptions?.sourceCode as string) || undefined,
          runtimePlatform: (extraOptions?.runtimePlatform as string) || undefined,
        }
      )
    );

    if (isApi) {
      result.push(
        softwareAppSchema(
          { rootUrl, path },
          { name: title, description, applicationCategory: 'DeveloperApplication', applicationSubCategory: 'API' }
        )
      );
      result.push(webApiSchema({ rootUrl, path, price: extraOptions?.price as number }, { name: title, description }));
    }
  }

  return result;
}
