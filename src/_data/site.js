module.exports = function () {
  const domain = String(process.env.SITE_DOMAIN || "fan-archive.invalid").replace(/\/+$/, "");

  return {
    // Unofficial fan work: the portfolio presented as an in-story archive from
    // Fian Ilchruinne. The photographs stay credited to Dermot R. Cochran here
    // (author), in the footer and on the About page, as CC BY requires.
    name: "Tissadelle Shepherd Photography",
    title: "Tissadelle Shepherd Photography",
    description: "An in-story photo archive from Fian Ilchruinne, presented as Tissadelle Shepherd's. Unofficial fan work; photographs by Dermot R. Cochran.",
    url: `https://${domain}/`,
    author: "Dermot R. Cochran",
    language: "en"
  };
};
