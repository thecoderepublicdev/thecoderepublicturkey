"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sitemap_xml),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./pages/sitemap.xml.jsx


const Sitemap = ()=>{
    return null;
};
const getServerSideProps = async ({ res  })=>{
    const BASE_URL = "https://thecoderepublic.com.tr";
    const staticPaths = external_fs_namespaceObject.readdirSync("pages").filter((staticPage)=>{
        return ![
            "_app.js",
            "_document.js",
            "404.js",
            "sitemap.xml.jsx"
        ].includes(staticPage);
    }).map((staticPagePath)=>{
        return `${BASE_URL}/${staticPagePath}`;
    });
    const allPaths = [
        ...staticPaths
    ];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths.map((url)=>{
        return `
            <url>
              <loc>https://www.thecoderepublic.com.tr</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>always</changefreq>
              <priority>1.0</priority>
            </url>
            <url>
              <loc>${url.replace(".js", "")}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>always</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    }).join("")}
    </urlset>`;
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
};
/* harmony default export */ const sitemap_xml = (Sitemap);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1879));
module.exports = __webpack_exports__;

})();