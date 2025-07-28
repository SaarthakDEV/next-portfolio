/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://next-portfolio-khaki-psi.vercel.app/",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin", "/private-page"],
};