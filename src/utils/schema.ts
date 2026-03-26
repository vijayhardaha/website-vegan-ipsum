import { personSchema, organizationSchema, websiteSchema } from '@vijayhardaha/schema-builder';

import { SITE_CONFIG } from '@/constants/seo';
import { siteUrl } from '@/utils/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Build breadcrumb items for a given page path.
 *
 * Automatically prepends Home breadcrumb.
 *
 * @param {string} path - The page path (e.g., '/about').
 * @param {string} currentPage - The name of the current page.
 * @returns {BreadcrumbItem[]} Array of breadcrumb items.
 */
export function buildBreadcrumbs(path: string, currentPage: string): BreadcrumbItem[] {
  return [
    { name: 'Home', path: '' },
    { name: currentPage, path },
  ];
}

/**
 * Build a list of global Schema.org entities that appear on every page.
 *
 * Includes Person, Organization, and WebSite schema.
 *
 * @returns {Array<AnyObject>} An array of schema objects for global use.
 */
export function globalSchema(): Record<string, unknown>[] {
  const rootUrl = siteUrl();

  return [
    personSchema({ rootUrl }),
    organizationSchema({ rootUrl }, { name: SITE_CONFIG.organization.name, foundingDate: '2025' }),
    websiteSchema({ rootUrl }, { name: SITE_CONFIG.name, description: SITE_CONFIG.description }),
  ];
}
