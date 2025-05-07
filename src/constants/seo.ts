import { getBaseUrl } from "@/utils/seoUtils";

/**
 * Represents the structure of SEO-related constants.
 */
type SEOType = {
  title: string;
  description: string;
  titlePostfix: string;
  separator: string;
};

/**
 * Represents the structure of the base metadata object.
 */
export type BaseMetadataType = {
  title: string;
  description: string;
  metadataBase: URL;
  appleTouchIcon: string;
  alternates: {
    canonical: string;
  };
  author: string;
  robots: string;
  icons: {
    icon: string;
    apple: string;
  };
  verification: {
    google: string;
  };
  openGraph: {
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
    }[];
    type: string;
    siteName: string;
    locale: string;
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
};

/**
 * An object containing SEO-related constants for the application.
 */
export const SEO: SEOType = {
  title: "Vegan Ipsum — Ethical placeholder text for compassionate creators.",
  description: "Generate random vegan text for your projects with Vegan Ipsum.",
  titlePostfix: "Vegan Ipsum",
  separator: "—",
};

/**
 * The base metadata object used for SEO, Open Graph, and Twitter cards.
 */
export const baseMetadata: BaseMetadataType = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(getBaseUrl()),
  appleTouchIcon: "/apple-touch-icon.png",
  alternates: {
    canonical: getBaseUrl(),
  },
  author: "Vijay Hardaha",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "4CyrCxZi9TWgvS-GzB1QUhgEl0bKoIzT36368e_vlx0",
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: "/thumbnail.png",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
    siteName: SEO.title,
    locale: "en_US",
    url: "https://veganipsum.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/thumbnail.png"],
    creator: "@vijayhardaha",
  },
};
