"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 7367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Section.js

function Section({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: props?.class,
        id: props?.children,
        children: props.children
    });
}

;// CONCATENATED MODULE: ./src/logos/tcr/TCR_Logo_3.svg
/* harmony default export */ const TCR_Logo_3 = ({"src":"/_next/static/media/TCR_Logo_3.828434f2.svg","height":984,"width":2313});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
    const NavigationBar = [
        {
            href: "/hakkimizda",
            title: "Hakkımızda"
        },
        {
            href: "/hizmetlerimiz",
            title: "Hizmetlerimiz"
        },
        {
            href: "/iletisim",
            title: "İletişim"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-7xl mx-auto py-2 px-5 text-white flex justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://www.thecoderepublic.com.tr",
                    title: "The Code Republic T\xfcrkiye | Geleceği Kodluyoruz",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: TCR_Logo_3,
                            className: "w-24 h-24",
                            alt: "The Code Republic Official Logo"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "flex items:center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex items-center gap-1",
                        children: NavigationBar.map((item, key)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    title: item.title,
                                    className: "transition font-body border border-transparent rounded-full hover:border-white hover:text-black hover:bg-white hidden md:block px-8 py-4",
                                    href: item.href,
                                    children: item.title
                                })
                            }, key);
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Icons.js

function TCRSocialMedia({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tcr-social-media",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: props.link,
            target: "_blank",
            title: props.title,
            children: props.children
        })
    });
}
function Twitter({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(TCRSocialMedia, {
        title: props.title,
        link: props.link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: props.width ?? "24",
            height: props.height ?? "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "feather feather-twitter",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            })
        })
    });
}
function Facebook({ ...props }) {
    return /*#__PURE__*/ _jsx(TCRSocialMedia, {
        title: props.title,
        link: props.link,
        children: /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: props.width ?? "24",
            height: props.height ?? "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "feather feather-facebook",
            children: /*#__PURE__*/ _jsx("path", {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            })
        })
    });
}
function Instagram({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(TCRSocialMedia, {
        title: props.title,
        link: props.link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: props.width ?? "24",
            height: props.height ?? "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "feather feather-instagram",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    x: "2",
                    y: "2",
                    width: "20",
                    height: "20",
                    rx: "5",
                    ry: "5"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                    x1: "17.5",
                    y1: "6.5",
                    x2: "17.51",
                    y2: "6.5"
                })
            ]
        })
    });
}
function LinkedIn({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(TCRSocialMedia, {
        title: props.title,
        link: props.link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: props.width ?? "24",
            height: props.height ?? "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "feather feather-linkedin",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                })
            ]
        })
    });
}


;// CONCATENATED MODULE: ./components/Footer.js






function Footer() {
    const FooterBlocks = [
        {
            sectionTitle: "Hizmetlerimiz",
            sectionLinks: [
                {
                    href: "/web-sitesi-hizmeti",
                    title: "Web Sitesi Hizmeti"
                },
                {
                    href: "/e-ticaret-web-sitesi-hizmeti",
                    title: "E-Ticaret Web Sitesi Hizmeti"
                },
                {
                    href: "/mobil-uygulama-gelistirme-hizmeti",
                    title: "Mobil Uygulama Geliştirme Hizmeti"
                },
                {
                    href: "/grafik-tasarım-hizmeti",
                    title: "Grafik Tasarım Hizmeti"
                }
            ]
        },
        {
            sectionTitle: "Kurumsal",
            sectionLinks: [
                {
                    href: "/hakkimizda",
                    title: "Hakkımızda"
                },
                {
                    href: "/ekibimiz",
                    title: "Ekbimiz"
                },
                {
                    href: "/teknolojilerimiz",
                    title: "Kullandığımız Teknolojiler"
                }
            ]
        },
        {
            sectionTitle: "Yasal",
            sectionLinks: [
                {
                    href: "/yasal/gizlilik-politikasi",
                    title: "Gizlilik Politikası"
                },
                {
                    href: "/yasal/hizmet-kosullari",
                    title: "Hizmet Koşulları"
                },
                {
                    href: "/yasal/sartlar-ve-kosullar",
                    title: "Şartlar ve Koşullar"
                },
                {
                    href: "/yasal/cerezler",
                    title: "\xc7erezler"
                }
            ]
        },
        {
            sectionTitle: "Bizimle İletişime Ge\xe7in",
            sectionLinks: [
                {
                    href: "tel:+1 415 449 8770",
                    title: "Bizi Arayın"
                },
                {
                    href: "mailto:contact@thecoderepublic.dev",
                    title: "contact@thecoderepublic.dev"
                },
                {
                    href: "mailto:thecoderepublicofficial@gmail.com",
                    title: "thecoderepublicofficial@gmail.com"
                },
                {
                    href: "mailto:coderepublic@yandex.com",
                    title: "coderepublic@yandex.com"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-black text-white",
        "aria-labelledby": "footer-heading",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                id: "footer-heading",
                className: "sr-only",
                children: "The Code Republic"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-8 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        loading: "lazy",
                                        className: "w-24 h-24 mx-auto",
                                        src: TCR_Logo_3,
                                        alt: "The Code Republic Resmi Logosu"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-evenly md:justify-center md:space-x-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Instagram, {
                                        title: "The Code Republic Resmi Instagram Hesabı",
                                        link: "https://www.instagram.com/thecoderepublic?utm_source=thecoderepublic.dev"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Twitter, {
                                        title: "The Code Republic Resmi Twitter Hesabı",
                                        link: "https://www.twitter.com/tcrdotdev?utm_source=thecoderepublic.dev"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkedIn, {
                                        title: "The Code Republic Resmi Twitter Hesabı",
                                        link: "https://www.linkedin.com/company/thecoderepublic/?utm_source=thecoderepublic.dev"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-12 grid md:grid-cols-4 gap-8 xl:col-span-2 md:text-center",
                        children: FooterBlocks.map((block, key)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-12 md:col-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "collapsible text-sm font-semibold text-gray-400 tracking-wider uppercase",
                                        children: block.sectionTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "block content mt-4 space-y-4",
                                        children: block.sectionLinks.map((link, key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    title: link.title,
                                                    rel: "noreferrer",
                                                    href: link.href,
                                                    className: "text-base text-gray-500 hover:text-white",
                                                    children: link.title
                                                })
                                            }, key);
                                        })
                                    })
                                ]
                            }, key);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-12 border-t border-gray-200 pt-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-base text-gray-400 text-center",
                            children: "\xa9 2022 The Code Republic | All Rights Reserved | T\xfcm Hakları Saklıdır"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/thumbnails/the_code_republic_home_thumbnail.png
/* harmony default export */ const the_code_republic_home_thumbnail = ({"src":"/_next/static/media/the_code_republic_home_thumbnail.ea96f073.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEUAAAEECA4aGhpVVVUvMjQqKio+Pj8edgOtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgQAGMDAwMrExMrCyMDIwMzMzMbGAGExMTSIIBAAN/ADIDe8xbAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/layout.js







function Layout({ ...props }) {
    const ur = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "all"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "googlebot",
                        content: "all"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "x-robots-tag",
                        content: "all"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: "https://www.thecoderepublic.com.tr" + ur.asPath
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "sitemap",
                        type: "application/xml",
                        title: "Sitemap",
                        href: "https://www.thecoderepublic.com.tr/sitemap.xml"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "tags",
                        content: props.tags
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "The Code Republic"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: props.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:title",
                        content: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:description",
                        content: props.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:site",
                        content: "The Code Republic"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:creator",
                        content: "The Code Republic"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "The Code Republic"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:locale",
                        content: "tr-TR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://www.thecoderepublic.com.tr" + ur.asPath
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: props.thumbnail ? "https://www.thecoderepublic.com.tr" + props.thumbnail.src : "https://www.thecoderepublic.com.tr" + the_code_republic_home_thumbnail.src
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;