"use strict";
exports.id = 775;
exports.ids = [775];
exports.modules = {

/***/ 9847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OurTeam)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/SectionHeader.js
var SectionHeader = __webpack_require__(2175);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/TeamMemberCard.js


function TeamMemberCard(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        itemscope: true,
        itemtype: "https://schema.org/Person",
        className: "w-full md:w-1/2 xl:w-1/4 px-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full mx-auto mb-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        itemprop: "image",
                        src: props.photo,
                        alt: props.photoAlt,
                        className: "w-full"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute w-full bottom-5 left-0 text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bg-black text-white relative rounded-lg overflow-hidden mx-5 py-5 px-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "z-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            itemprop: "jobTitle",
                                            className: "text-sm text-body-color",
                                            children: props.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            itemprop: "name",
                                            className: "text-lg font-semibold text-dark",
                                            children: props.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-white text-sm hover:text-violet-900",
                                            href: "mailto:" + props.mail,
                                            children: props.mail
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "absolute left-0 bottom-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "61",
                                                height: "30",
                                                viewBox: "0 0 61 30",
                                                fill: "white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                    cx: "16",
                                                    cy: "45",
                                                    r: "45",
                                                    fill: "white",
                                                    "fill-opacity": "0.11"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "absolute top-0 right-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "20",
                                                height: "25",
                                                viewBox: "0 0 20 25",
                                                fill: "white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "0.706257",
                                                        cy: "24.3533",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 0.706257 24.3533)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "6.39669",
                                                        cy: "24.3533",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 6.39669 24.3533)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "12.0881",
                                                        cy: "24.3533",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 12.0881 24.3533)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "17.7785",
                                                        cy: "24.3533",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 17.7785 24.3533)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "0.706257",
                                                        cy: "18.6624",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 0.706257 18.6624)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "6.39669",
                                                        cy: "18.6624",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 6.39669 18.6624)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "12.0881",
                                                        cy: "18.6624",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 12.0881 18.6624)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "17.7785",
                                                        cy: "18.6624",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 17.7785 18.6624)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "0.706257",
                                                        cy: "12.9717",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 0.706257 12.9717)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "6.39669",
                                                        cy: "12.9717",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 6.39669 12.9717)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "12.0881",
                                                        cy: "12.9717",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 12.0881 12.9717)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "17.7785",
                                                        cy: "12.9717",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 17.7785 12.9717)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "0.706257",
                                                        cy: "7.28077",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 0.706257 7.28077)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "6.39669",
                                                        cy: "7.28077",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 6.39669 7.28077)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "12.0881",
                                                        cy: "7.28077",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 12.0881 7.28077)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "17.7785",
                                                        cy: "7.28077",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 17.7785 7.28077)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "0.706257",
                                                        cy: "1.58989",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 0.706257 1.58989)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "6.39669",
                                                        cy: "1.58989",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 6.39669 1.58989)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "12.0881",
                                                        cy: "1.58989",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 12.0881 1.58989)",
                                                        fill: "white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                        cx: "17.7785",
                                                        cy: "1.58989",
                                                        r: "0.646687",
                                                        transform: "rotate(-90 17.7785 1.58989)",
                                                        fill: "white"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/images/cenk_kahramaner_the_code_republic.jpeg
/* harmony default export */ const cenk_kahramaner_the_code_republic = ({"src":"/_next/static/media/cenk_kahramaner_the_code_republic.8e88c017.jpeg","height":2560,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAgEAAABgEFAQAAAAAAAAAAAAAAAQIDBBEFBgcSIVHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALNObjJYl5GfJxslOPUpDEVTbfRknkdmfp3dfAAAH//Z","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/fatih-örmekıran-the-code-republic.png
/* harmony default export */ const fatih_rmek_ran_the_code_republic = ({"src":"/_next/static/media/fatih-örmekıran-the-code-republic.a28d27dd.png","height":2560,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAANlBMVEW0tLSBgYHS0tKGhobAwMBeXl6srKyfn5+7u7vIyMh1dXUkJCTn5+fs7OyTk5OXl5dCQkJERERwT1vvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAXBiQGAIAwAsWvpCyi6/7IkPDveFLRlVoHF6IJuAyytxkFTkYR0n4H7Wt9/ASAwAS5iL8EhAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/gamze-bozkuş-the-code-republic.png
/* harmony default export */ const gamze_bozku_the_code_republic = ({"src":"/_next/static/media/gamze-bozkuş-the-code-republic.0f021e15.png","height":1280,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAALVBMVEV3d3ddXV2Hh4eamppmZmaNjY0dHR1VVVUpKSk3NzeCgoJMTEwQEBBwcHBHR0eKmcWFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBhwEAIAjAsLLB9f+5JoQFrhg98tAt1xuvtSahZGfizDkCWl3KNUPjAxydAQXeWkzmAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/ecenur-şimşek-the-code-republic.png
/* harmony default export */ const ecenur_im_ek_the_code_republic = ({"src":"/_next/static/media/ecenur-şimşek-the-code-republic.29f03bc2.png","height":2560,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAG1BMVEUfHx80NDRMTEwnJyc9PT1cXFxzc3OBgYFlZWXU2Ma1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nB3HyQ0AMBACsQH26r/iSPHPdIUS5RFCvSbIM4J410DuD7eg0mceDxgAihkVlBgAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./components/TeamMember.js






function TeamMember({ ...props }) {
    const TeamMembers = [
        {
            name: "Cenk Kahramaner",
            title: "Kurucu",
            photo: cenk_kahramaner_the_code_republic,
            photoAlt: "Cenk Kahramaner The Code Republic'de",
            mail: "cenk@thecoderepublic.dev"
        },
        {
            name: "Fatih \xd6rmekıran",
            title: "Kurucu Ortak",
            photo: fatih_rmek_ran_the_code_republic,
            photoAlt: "Fatih \xd6rmekıran The Code Republic'de",
            mail: "fatih@thecoderepublic.dev"
        },
        {
            name: "Gamze Bozkuş",
            title: "Kurumsal İletişim",
            photo: gamze_bozku_the_code_republic,
            photoAlt: "Gamze Bozkuş The Code Republic'de",
            mail: "gamze@thecoderepublic.dev"
        },
        {
            name: "Ecenur Şimşek",
            title: "Kurumsal İletişim",
            photo: ecenur_im_ek_the_code_republic,
            photoAlt: "Ecenur Şimşek The Code Republic'de",
            mail: "gamze@thecoderepublic.dev"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "tcr-team-member",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "TCRContainer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap justify-center -mx-4",
                children: TeamMembers.map((member, key)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(TeamMemberCard, {
                        name: member.name,
                        title: member.title,
                        photo: member.photo,
                        photoAlt: member.photoAlt,
                        mail: member.mail
                    }, key);
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/OurTeam.js



function OurTeam({ ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeader/* default */.Z, {
                align: "left",
                title: "İşte o profesyonel eller",
                subTitle: "Ekibimiz",
                description: "Sizinle tanışmak ve birlikte \xe7alışmak i\xe7in sabırsızlanıyoruz."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TeamMember, {})
        ]
    });
}


/***/ }),

/***/ 9187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TCRTCRContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TCRTCRContainer({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-7xl mx-auto py-2 px-5",
        children: props.children
    });
}


/***/ })

};
;