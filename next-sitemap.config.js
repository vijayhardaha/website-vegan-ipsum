/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://veganipsum.vercel.app",
  generateRobotsTxt: true,
  sitemapBaseFileName: "sitemap",
  changefreq: "weekly",
  priority: 0.7,
  trailingSlash: false,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    transformRobotsTxt: async (_, robotsTxt) => {
      const withoutHost = robotsTxt.replace(`# Host\nHost: https://veganipsum.vercel.app\n\n`, "");

      return withoutHost;
    },
  },
};

module.exports = config;
