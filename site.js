// Fills in the GitHub and download links. The site is served from https://squadwatch.sergiis.com
// (GitHub Pages, repo Skarshevskyi/skarshevskyi.github.io), so the links are fixed here.
(function () {
  var USER = "Skarshevskyi";
  var gh = "https://github.com/" + USER + "/squadwatch";
  // The app's code repo is private, so "Contact" uses the issues of this (public) website repo,
  // and "Download" points to the shared Google Drive folder with the builds.
  var site = "https://github.com/" + USER + "/skarshevskyi.github.io";
  var DOWNLOAD_URL = "https://drive.google.com/drive/folders/1TtJJWuBEpm2_okp3cYVST7WA37SBhPFl";
  var map = {
    repo: gh,
    issues: site && site + "/issues",
    releases: DOWNLOAD_URL,
  };
  document.querySelectorAll("[data-gh]").forEach(function (a) {
    var url = map[a.getAttribute("data-gh")];
    if (url) a.setAttribute("href", url);
  });
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
