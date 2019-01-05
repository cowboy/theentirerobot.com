webpackHotUpdate("styles",{

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"content___3tKqh","header":"header___3WU5y","title":"title___JXFef","subtitle":"subtitle___1pe-O","footerText":"footerText____KVsm","footerList":"footerList___KP5D9","footerItem":"footerItem___2JMq1","link":"link___1-pnY"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1546658332936");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.4e38933f09255f8981c8.hot-update.js.map