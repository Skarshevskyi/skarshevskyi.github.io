// Fills in GitHub links from the page's own address, so the site works
// unchanged at https://<username>.github.io/<repo>/
(function () {
  var host = location.hostname;
  var user = host.endsWith(".github.io") ? host.split(".")[0] : null;
  var repo = location.pathname.split("/").filter(Boolean)[0] || "squadwatch";
  if (/\.html$/.test(repo)) repo = "squadwatch";
  var gh = user ? "https://github.com/" + user + "/" + repo : null;
  var map = {
    repo: gh,
    issues: gh && gh + "/issues",
    releases: gh && gh + "/releases/latest",
  };
  document.querySelectorAll("[data-gh]").forEach(function (a) {
    var url = map[a.getAttribute("data-gh")];
    if (url) a.setAttribute("href", url);
  });
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
