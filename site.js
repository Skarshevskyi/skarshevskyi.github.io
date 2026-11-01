// Fills in GitHub links from the page's own address, so the site works
// unchanged at https://<username>.github.io/<repo>/
(function () {
  var host = location.hostname;
  var user = host.endsWith(".github.io") ? host.split(".")[0] : null;
  var repo = location.pathname.split("/").filter(Boolean)[0] || "squadwatch";
  if (/\.html$/.test(repo)) repo = "squadwatch";
  var gh = user ? "https://github.com/" + user + "/" + repo : null;
  // The app's code repo is private, so "Contact" uses the issues of this (public) website repo,
  // and "Download" points to the shared Google Drive folder with the builds.
  var site = user ? "https://github.com/" + user + "/" + host : null;
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
