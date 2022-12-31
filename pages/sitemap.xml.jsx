import React from 'react';
import * as fs from 'fs';

const Sitemap = () => {
    return null;
};

export const getInitialProps = async ({ res }) => {
    const BASE_URL = 'https://thecoderepublic.com.tr';
    const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.jsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });
    const allPaths = [...staticPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>https://www.thecoderepublic.com.tr</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>always</changefreq>
              <priority>1.0</priority>
            </url>
            <url>
              <loc>${url.replace(".js","")}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>always</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;