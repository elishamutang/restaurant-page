/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --header: #33523e;
    --content: #f6f6e8;
    --tabBar: rgb(200, 40, 40);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--content);
}

a {
    text-decoration: none;
    color: var(--content);
}

/* Make each section max-width: 100%*/
#mainContainer > div {
    max-width: 100%;
}

/* Main container div */
#mainContainer {
    height: 100%;
    background-color: var(--content);

    display: grid;
}

.home {
    grid-template-rows: 150px 700px 0.5fr repeat(14, auto);
    grid-template-areas: 
        "header"
        "slider1"
        "oldMan"
        "history1"
        "image1"
        "div1"
        "div2"
        "div3"
        "video"
        "history2"
        "image2"
        "history3"
        "image3"
        "history4"
        "slider2"
        "outlet"
        "footer"
    ;
}

.menu, .products, .outlets {
    grid-template-columns: 1fr;
    grid-template-rows: 150px repeat(3, auto);
    grid-template-areas: 
        "header"
        "slider1"
        "signatureMenu"
        "footer"
    ;
}

.products {
    grid-template-areas:
        "header"
        "slider1"
        "productSection"
        "footer"
    ;
}

.outlets {
    grid-template-areas: 
        "header"
        "slider1"
        "outletSection"
        "footer"
    ;
}

#signatureMenu {
    grid-area: signatureMenu;
}

#productSection {
    grid-area: productSection;
}

#signatureMenu, #productSection, #outletSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
}

#outletSection > .signatureHeader > h1,
#productSection > .signatureHeader > h1,
#signatureMenu > .signatureHeader > h1 {
    border-bottom: 0.1em solid var(--header);
}

#foodContainer, #productContainer {
    display: grid;
    padding: 0 100px;
    margin-bottom: 100px;
    width: 100%;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "nasiL rendangChicken meeSiam horFun"
        "kueyTeow laksaMee nanyang chickenRice"
        "malayFriedRice prawnFriedRice eggTart poloBun"
        "toast rojak kopi cendol"
    ;
    column-gap: 20px;
    row-gap: 40px;
}

#productContainer {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
        "CWC RWC NSAWC Mocha"
        "TehTarik DripCoffee Kaya PandanKaya"
        "CrunchyPB CreamyPB PanMee SpicyPanMee"
        "MalaPanMee SoupPanMee ClassicPT CheesePT"
        "SambalRojak . . . "
    ;
}

#outletContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 
        "KLSelangor"
        "Johor"
    ;
    justify-items: center;
    align-items: center;
    margin-bottom: 5%;
}

#KLSelangorArea, #johorSect {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.8rem;
    row-gap: 0.8rem;

    margin-left: 10%;
    margin-right: 10%;
}

#KLSelangorArea {
    grid-template-areas: 
        "title title title"
        "midValley pavillionKL TRX"
        "klcc sunwayPyramid pavillionBJ"
        "klia2Arrival klia2Departure Puchong"
    ;
}

#KLSelangorTitle {
    grid-area: title;
}

#johorSect {
    grid-template-areas: 
        "titleJB titleJB titleJB"
        "midvalleyJB jbcitysquare aeonTebrau"
        ". johorJaya ."
    ;
}

#johorTitle {
    grid-area: titleJB;
    margin-top: 5%;
}

#KLSelangorTitle, #johorTitle {
    color: var(--header);
    font-size: 0.8em;
    justify-self: center;
}

#KLSelangorTitle > .signatureHeader,
#johorTitle > .signatureHeader {
    margin: 0;
}

#Johor-Outlet4 {
    grid-area: johorJaya;
}

.foodItems, .productItems, .outletClass {
    width: fit-content;
    border-radius: 10px;
    position: relative;
}

.foodItems > img,
.productItems > img,
.outletClass > img {
    max-width: 100%;
    display: block;
    border-radius: 10px;
}

.outletClass > img {
    min-height: 100%;
}

.foodName, .productName, .outletName {
    position: absolute;
    height: 100%;
    width: 100%;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
    line-height: 1.2em;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    opacity: 0;
    transition: 0.3s;
    text-align: center;
}

.fade-in {
    transition: 0.3s;
}

.fade-in:hover {
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
}

/* Header div */
#header {
    background-color: var(--header);
    position: sticky;
    top: 0;
    z-index: 1;
    grid-area: header;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 0.7fr 0.3fr;
    grid-template-areas: 
        "logo"
        "navBar"
    ;
}

/* Logo div */
#logoDiv {
    width: inherit;
    background-color: var(--header);
    grid-area: logo;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 4.5rem;
    font-weight: bold;
    color: white;
    letter-spacing: 0.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
}

#companyName > a {
    cursor: pointer;
}

/* Tab bar div */
#tabDiv {
    width: inherit;
    background-color: var(--tabBar);
    grid-area: navBar;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.menu-item {
    color: white;
}

.menu-item > a {
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1.3rem;
}

.menu-item > a:hover {
    color: var(--header);
    font-size: 1.5rem;
}

/* Main content div */

/* Image sliders */
#sliderOne {
    height: 100%;
    overflow: hidden;
    grid-area: slider1;
}

#sliderOne > .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
}

#sliderOne > .wrapper {
    animation: sliderOne 16s infinite;
}

#sliderOne > .wrapper > img {
    width: 100%;
    height: auto;
}

@keyframes sliderOne {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(0);
    }

    35% {
        transform: translateX(-100%);
    }

    45% {
        transform: translateX(-100%);
    }

    55% {
        transform: translateX(-200%);
    }

    75% {
        transform: translateX(-200%);
    }

    85% {
        transform: translateX(-300%);
    }

    90% {
        transform: translateX(-300%);
    }

    95% {
        transform: translateX(-300%);
    }

    100% {
        transform: translateX(0);
    }
}

#sliderTwo {
    grid-area: slider2;
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
}

#sliderTwo div img {
    width: 500px;
    display: inline-flex;
    margin: 10px;
    opacity: 0.85;
    transition: 0.5s;
    border-radius: 10px;
}

#sliderTwo div img:hover {
    opacity: 1;
    cursor: pointer;
}

#sliderTwo div {
    white-space: nowrap;
    animation: carouselOne 20s linear infinite;
    animation-delay: -10s;
}

#sliderTwo div:nth-child(2) {
    animation: carouselTwo 20s linear infinite;
    animation-delay: -20s;
}

@keyframes carouselOne {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes carouselTwo {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-200%);
    }
}

/* Old image div */
#oldImg {
    grid-area: oldMan;
    margin-top: 5px;
}

#oldImgWrapper {
    display: flex;
    gap: 5px;
    width: 100%;
    height: 100%;
}

#wrapperOne, #wrapperTwo {
    width: 100%;
    height: auto;
    flex: 1;
}

#wrapperOne > img,
#wrapperTwo > img {
    width: 100%;
    height: auto;
}

/* History section */
.historySection {
    height: 100%;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
}

#huayangClassic {
    grid-area: history2;
}

#historySection {
    grid-area: history1;
}

.historySectionTitle {
    margin-top: 30px;
}

.historySectionTitle > img {
    width: 100%;
    height: auto;
}

.historySectionWords {
    display: flex;
    flex-direction: column;
    gap: 35px;
    justify-content: center;
    text-align: center;
    align-items: center;

    font-size: 20px;
    color: var(--header);
    width: 60%;
}

#handmadeBreadDiv {
    grid-area: history3;
}

.non-img > div:first-child {
    width: 100%;
    margin-top: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

#signatureSect {
    grid-area: history4;
}

.headerTitle {
    color: var(--header);
    font-size: 4em;
}

.headerDivs > img {
    max-width: 100%;
    display: block;
    height: 100%;
}

#outletDiv {
    grid-area: outlet;
    position: relative;
}


/* Random header div */
.headerImg {
    width: 100%;
    height: 100%;
}

#firstHeader {
    grid-area: image1;
}

#secondHeader {
    grid-area: image2;
}

#thirdHeader {
    grid-area: image3;
}

.headerImg > img {
    max-width: 100%;
    display: block;
    height: 100%;
}

/* Repetitive divs */
#imgDiv1 > img,
#imgDiv2 > img,
#imgDiv3 > img {
    width: 100%;
    height: 100%;
}

#repeatDiv1 {
    grid-area: div1;
}

#repeatDiv2 {
    grid-area: div2;
}

#imgDiv2 {
    grid-area: left;
}

#repeatDiv3 {
    grid-area: div3;
}

.repeatDivs {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";
}

.wordDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.repeatDivs > div > div {
    width: 350px;
}

.repeatDivs > div > div > img {
    width: 100%;
    height: auto;
}

.wordDiv > div:last-child {
    margin-top: 10px;
    text-align: center;
    width: 80%;
    line-height: 2;
    color: var(--header);
}

#outletLink {
    border: 3px solid white;
    border-radius: 15px;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 2rem;
    color: var(--content);
    background-color: var(--tabBar);
    
    position: absolute;
    top: 85%;
    transition: 0.3s;
}

#outletLink:hover {
    border: 0;
    text-shadow: 0px 2px 10px var(--content);
    transform: scale(1.1);
}

@media only screen and (max-width: 1000px) {

    .home {
        grid-template-columns: 100%;
        grid-template-rows: 200px repeat(16, auto);
        grid-template-areas: 
            "header"
            "slider1"
            "oldMan"
            "history1"
            "image1"
            "div1"
            "div2"
            "div3"
            "video"
            "history2"
            "image2"
            "history3"
            "image3"
            "history4"
            "slider2"
            "outlet"
            "footer"
        ;
    }

    .menu-item > a {
        font-size: 1.2rem;
    }

    .repeatDivs {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
            "left"
            "right"
        ;
    }

    #imgDiv2 {
        grid-area: right;
    }

    #videoSection {
        flex-direction: column;
    }

    footer {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem !important;
    }

    #footerDiv1, #footerDiv2 {
        gap: 1rem !important;
    }

    #footerDiv1, #footerDiv2 {
        margin-left: 0 !important;
    }

    #footerDivOneChildTwo {
        gap: 0.5rem !important;
        flex-direction: column;
    }

    .foodName, .productName, .outletName {
        font-size: 1rem;
    }

    #KLSelangorTitle, #johorTitle {
        font-size: 0.5em;
    }

}

/* Video section */
#videoSection {
    height: 100%;
    grid-area: video;
    margin-top: 5px;
    
    display: flex;
    gap: 5px;
}

#videoSection > div {
    width: 100%;
    height: 600px;
}

#videoSection > div > iframe {
    width: 100%;
    height: 100%;
}

/* Titled Sections */
#titleMainDiv1 {
    grid-area: title1;
}

#titleMainDiv2 {
    grid-area: title2;
}

#titleMainDiv3 {
    grid-area: title3;
}

.titleMainDiv > div > img {
    width: 100%;
    height: auto;
}

/* Footer section */
footer {
    grid-area: footer;
    height: 20vh;
    background-color: var(--header);

    display: flex;
    justify-content: center;
    gap: 3rem;
}

#footerDiv1 {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 2rem;
}

#footerLogoDiv > img {
    width: 100%;
    height: auto;
}

#footerDivOneChildOne {
    width: 10rem;
    flex-wrap: wrap;
}

#footerDivOneChildTwo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
}

#footerDivOneChildTwo > a {
    font-weight: bold;
    font-size: 1.5rem;
    flex: 0;

    transition: transform 0.3s;
}

#footerDivOneChildTwo > a:hover {
    transform: scale(1.1);
}

#footerDiv2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 2rem;
}

#footerDivTwoChildOne {
    color: var(--content);
    font-weight: bold;
    font-size: 1.5rem;
    flex: 0;
    white-space: nowrap;
}

#footerDivTwoChildTwo > a > img {
    width: 2rem;
    transition: all 0.3s;
}

#footerDivTwoChildTwo > a > img:hover {
    transform: rotate(360deg) scale(1.2);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA,qCAAqC;AACrC;IACI,eAAe;AACnB;;AAEA,uBAAuB;AACvB;IACI,YAAY;IACZ,gCAAgC;;IAEhC,aAAa;AACjB;;AAEA;IACI,sDAAsD;IACtD;;;;;;;;;;;;;;;;;;IAkBA;AACJ;;AAEA;IACI,0BAA0B;IAC1B,yCAAyC;IACzC;;;;;IAKA;AACJ;;AAEA;IACI;;;;;IAKA;AACJ;;AAEA;IACI;;;;;IAKA;AACJ;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;AACb;;AAEA;;;IAGI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;;IAEX,sCAAsC;IACtC,mCAAmC;IACnC;;;;;IAKA;IACA,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,sCAAsC;IACtC,+BAA+B;IAC/B;;;;;;IAMA;AACJ;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,mCAAmC;IACnC;;;IAGA;IACA,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,kBAAkB;IAClB,eAAe;;IAEf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI;;;;;IAKA;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;;;;IAIA;AACJ;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;IAEI,SAAS;AACb;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;;IAGI,eAAe;IACf,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,UAAU;AACd;;AAEA,eAAe;AACf;IACI,+BAA+B;IAC/B,gBAAgB;IAChB,MAAM;IACN,UAAU;IACV,iBAAiB;;IAEjB,aAAa;IACb,2BAA2B;IAC3B,+BAA+B;IAC/B;;;IAGA;AACJ;;AAEA,aAAa;AACb;IACI,cAAc;IACd,+BAA+B;IAC/B,eAAe;;IAEf,yCAAyC;IACzC,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,sBAAsB;;IAEtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA,gBAAgB;AAChB;IACI,cAAc;IACd,+BAA+B;IAC/B,iBAAiB;;IAEjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA,qBAAqB;;AAErB,kBAAkB;AAClB;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,0CAA0C;IAC1C,qBAAqB;AACzB;;AAEA;IACI,0CAA0C;IAC1C,qBAAqB;AACzB;;AAEA;IACI;QACI,2BAA2B;IAC/B;IACA;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,4BAA4B;IAChC;AACJ;;AAEA,kBAAkB;AAClB;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,OAAO;AACX;;AAEA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,mBAAmB;;IAEnB,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;;IAEnB,eAAe;IACf,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;;IAEhB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA,sBAAsB;AACtB;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,YAAY;AAChB;;AAEA,oBAAoB;AACpB;;;IAGI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,+BAA+B;;IAE/B,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,wCAAwC;IACxC,qBAAqB;AACzB;;AAEA;;IAEI;QACI,2BAA2B;QAC3B,0CAA0C;QAC1C;;;;;;;;;;;;;;;;;;QAkBA;IACJ;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,0BAA0B;QAC1B,2BAA2B;QAC3B;;;QAGA;IACJ;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,sBAAsB;QACtB,mBAAmB;QACnB,sBAAsB;IAC1B;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,sBAAsB;QACtB,sBAAsB;IAC1B;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;AAEJ;;AAEA,kBAAkB;AAClB;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;;IAEf,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,oBAAoB;AACpB;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,mBAAmB;AACnB;IACI,iBAAiB;IACjB,YAAY;IACZ,+BAA+B;;IAE/B,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,OAAO;;IAEP,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;IACjB,OAAO;IACP,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":[":root {\n    --header: #33523e;\n    --content: #f6f6e8;\n    --tabBar: rgb(200, 40, 40);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--content);\n}\n\na {\n    text-decoration: none;\n    color: var(--content);\n}\n\n/* Make each section max-width: 100%*/\n#mainContainer > div {\n    max-width: 100%;\n}\n\n/* Main container div */\n#mainContainer {\n    height: 100%;\n    background-color: var(--content);\n\n    display: grid;\n}\n\n.home {\n    grid-template-rows: 150px 700px 0.5fr repeat(14, auto);\n    grid-template-areas: \n        \"header\"\n        \"slider1\"\n        \"oldMan\"\n        \"history1\"\n        \"image1\"\n        \"div1\"\n        \"div2\"\n        \"div3\"\n        \"video\"\n        \"history2\"\n        \"image2\"\n        \"history3\"\n        \"image3\"\n        \"history4\"\n        \"slider2\"\n        \"outlet\"\n        \"footer\"\n    ;\n}\n\n.menu, .products, .outlets {\n    grid-template-columns: 1fr;\n    grid-template-rows: 150px repeat(3, auto);\n    grid-template-areas: \n        \"header\"\n        \"slider1\"\n        \"signatureMenu\"\n        \"footer\"\n    ;\n}\n\n.products {\n    grid-template-areas:\n        \"header\"\n        \"slider1\"\n        \"productSection\"\n        \"footer\"\n    ;\n}\n\n.outlets {\n    grid-template-areas: \n        \"header\"\n        \"slider1\"\n        \"outletSection\"\n        \"footer\"\n    ;\n}\n\n#signatureMenu {\n    grid-area: signatureMenu;\n}\n\n#productSection {\n    grid-area: productSection;\n}\n\n#signatureMenu, #productSection, #outletSection {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 40px;\n}\n\n#outletSection > .signatureHeader > h1,\n#productSection > .signatureHeader > h1,\n#signatureMenu > .signatureHeader > h1 {\n    border-bottom: 0.1em solid var(--header);\n}\n\n#foodContainer, #productContainer {\n    display: grid;\n    padding: 0 100px;\n    margin-bottom: 100px;\n    width: 100%;\n\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-template-areas: \n        \"nasiL rendangChicken meeSiam horFun\"\n        \"kueyTeow laksaMee nanyang chickenRice\"\n        \"malayFriedRice prawnFriedRice eggTart poloBun\"\n        \"toast rojak kopi cendol\"\n    ;\n    column-gap: 20px;\n    row-gap: 40px;\n}\n\n#productContainer {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-areas: \n        \"CWC RWC NSAWC Mocha\"\n        \"TehTarik DripCoffee Kaya PandanKaya\"\n        \"CrunchyPB CreamyPB PanMee SpicyPanMee\"\n        \"MalaPanMee SoupPanMee ClassicPT CheesePT\"\n        \"SambalRojak . . . \"\n    ;\n}\n\n#outletContainer {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, auto);\n    grid-template-areas: \n        \"KLSelangor\"\n        \"Johor\"\n    ;\n    justify-items: center;\n    align-items: center;\n    margin-bottom: 5%;\n}\n\n#KLSelangorArea, #johorSect {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    column-gap: 0.8rem;\n    row-gap: 0.8rem;\n\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n#KLSelangorArea {\n    grid-template-areas: \n        \"title title title\"\n        \"midValley pavillionKL TRX\"\n        \"klcc sunwayPyramid pavillionBJ\"\n        \"klia2Arrival klia2Departure Puchong\"\n    ;\n}\n\n#KLSelangorTitle {\n    grid-area: title;\n}\n\n#johorSect {\n    grid-template-areas: \n        \"titleJB titleJB titleJB\"\n        \"midvalleyJB jbcitysquare aeonTebrau\"\n        \". johorJaya .\"\n    ;\n}\n\n#johorTitle {\n    grid-area: titleJB;\n    margin-top: 5%;\n}\n\n#KLSelangorTitle, #johorTitle {\n    color: var(--header);\n    font-size: 0.8em;\n    justify-self: center;\n}\n\n#KLSelangorTitle > .signatureHeader,\n#johorTitle > .signatureHeader {\n    margin: 0;\n}\n\n#Johor-Outlet4 {\n    grid-area: johorJaya;\n}\n\n.foodItems, .productItems, .outletClass {\n    width: fit-content;\n    border-radius: 10px;\n    position: relative;\n}\n\n.foodItems > img,\n.productItems > img,\n.outletClass > img {\n    max-width: 100%;\n    display: block;\n    border-radius: 10px;\n}\n\n.outletClass > img {\n    min-height: 100%;\n}\n\n.foodName, .productName, .outletName {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    color: white;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: bold;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    line-height: 1.2em;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: inherit;\n    opacity: 0;\n    transition: 0.3s;\n    text-align: center;\n}\n\n.fade-in {\n    transition: 0.3s;\n}\n\n.fade-in:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n    opacity: 1;\n}\n\n/* Header div */\n#header {\n    background-color: var(--header);\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    grid-area: header;\n\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 0.7fr 0.3fr;\n    grid-template-areas: \n        \"logo\"\n        \"navBar\"\n    ;\n}\n\n/* Logo div */\n#logoDiv {\n    width: inherit;\n    background-color: var(--header);\n    grid-area: logo;\n\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 4.5rem;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 0.2rem;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#companyName > a {\n    cursor: pointer;\n}\n\n/* Tab bar div */\n#tabDiv {\n    width: inherit;\n    background-color: var(--tabBar);\n    grid-area: navBar;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.menu-item {\n    color: white;\n}\n\n.menu-item > a {\n    cursor: pointer;\n    transition: all 0.2s;\n    font-size: 1.3rem;\n}\n\n.menu-item > a:hover {\n    color: var(--header);\n    font-size: 1.5rem;\n}\n\n/* Main content div */\n\n/* Image sliders */\n#sliderOne {\n    height: 100%;\n    overflow: hidden;\n    grid-area: slider1;\n}\n\n#sliderOne > .wrapper {\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n\n#sliderOne > .wrapper {\n    animation: sliderOne 16s infinite;\n}\n\n#sliderOne > .wrapper > img {\n    width: 100%;\n    height: auto;\n}\n\n@keyframes sliderOne {\n    0% {\n        transform: translateX(0);\n    }\n\n    25% {\n        transform: translateX(0);\n    }\n\n    35% {\n        transform: translateX(-100%);\n    }\n\n    45% {\n        transform: translateX(-100%);\n    }\n\n    55% {\n        transform: translateX(-200%);\n    }\n\n    75% {\n        transform: translateX(-200%);\n    }\n\n    85% {\n        transform: translateX(-300%);\n    }\n\n    90% {\n        transform: translateX(-300%);\n    }\n\n    95% {\n        transform: translateX(-300%);\n    }\n\n    100% {\n        transform: translateX(0);\n    }\n}\n\n#sliderTwo {\n    grid-area: slider2;\n    position: relative;\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n}\n\n#sliderTwo div img {\n    width: 500px;\n    display: inline-flex;\n    margin: 10px;\n    opacity: 0.85;\n    transition: 0.5s;\n    border-radius: 10px;\n}\n\n#sliderTwo div img:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n#sliderTwo div {\n    white-space: nowrap;\n    animation: carouselOne 20s linear infinite;\n    animation-delay: -10s;\n}\n\n#sliderTwo div:nth-child(2) {\n    animation: carouselTwo 20s linear infinite;\n    animation-delay: -20s;\n}\n\n@keyframes carouselOne {\n    0% {\n        transform: translateX(100%);\n    }\n    100% {\n        transform: translateX(-100%);\n    }\n}\n\n@keyframes carouselTwo {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-200%);\n    }\n}\n\n/* Old image div */\n#oldImg {\n    grid-area: oldMan;\n    margin-top: 5px;\n}\n\n#oldImgWrapper {\n    display: flex;\n    gap: 5px;\n    width: 100%;\n    height: 100%;\n}\n\n#wrapperOne, #wrapperTwo {\n    width: 100%;\n    height: auto;\n    flex: 1;\n}\n\n#wrapperOne > img,\n#wrapperTwo > img {\n    width: 100%;\n    height: auto;\n}\n\n/* History section */\n.historySection {\n    height: 100%;\n    margin-bottom: 50px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 15px;\n}\n\n#huayangClassic {\n    grid-area: history2;\n}\n\n#historySection {\n    grid-area: history1;\n}\n\n.historySectionTitle {\n    margin-top: 30px;\n}\n\n.historySectionTitle > img {\n    width: 100%;\n    height: auto;\n}\n\n.historySectionWords {\n    display: flex;\n    flex-direction: column;\n    gap: 35px;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n\n    font-size: 20px;\n    color: var(--header);\n    width: 60%;\n}\n\n#handmadeBreadDiv {\n    grid-area: history3;\n}\n\n.non-img > div:first-child {\n    width: 100%;\n    margin-top: 30px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#signatureSect {\n    grid-area: history4;\n}\n\n.headerTitle {\n    color: var(--header);\n    font-size: 4em;\n}\n\n.headerDivs > img {\n    max-width: 100%;\n    display: block;\n    height: 100%;\n}\n\n#outletDiv {\n    grid-area: outlet;\n    position: relative;\n}\n\n\n/* Random header div */\n.headerImg {\n    width: 100%;\n    height: 100%;\n}\n\n#firstHeader {\n    grid-area: image1;\n}\n\n#secondHeader {\n    grid-area: image2;\n}\n\n#thirdHeader {\n    grid-area: image3;\n}\n\n.headerImg > img {\n    max-width: 100%;\n    display: block;\n    height: 100%;\n}\n\n/* Repetitive divs */\n#imgDiv1 > img,\n#imgDiv2 > img,\n#imgDiv3 > img {\n    width: 100%;\n    height: 100%;\n}\n\n#repeatDiv1 {\n    grid-area: div1;\n}\n\n#repeatDiv2 {\n    grid-area: div2;\n}\n\n#imgDiv2 {\n    grid-area: left;\n}\n\n#repeatDiv3 {\n    grid-area: div3;\n}\n\n.repeatDivs {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"left right\";\n}\n\n.wordDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.repeatDivs > div > div {\n    width: 350px;\n}\n\n.repeatDivs > div > div > img {\n    width: 100%;\n    height: auto;\n}\n\n.wordDiv > div:last-child {\n    margin-top: 10px;\n    text-align: center;\n    width: 80%;\n    line-height: 2;\n    color: var(--header);\n}\n\n#outletLink {\n    border: 3px solid white;\n    border-radius: 15px;\n    text-decoration: none;\n    cursor: pointer;\n    padding: 10px 20px;\n    font-size: 2rem;\n    color: var(--content);\n    background-color: var(--tabBar);\n    \n    position: absolute;\n    top: 85%;\n    transition: 0.3s;\n}\n\n#outletLink:hover {\n    border: 0;\n    text-shadow: 0px 2px 10px var(--content);\n    transform: scale(1.1);\n}\n\n@media only screen and (max-width: 1000px) {\n\n    .home {\n        grid-template-columns: 100%;\n        grid-template-rows: 200px repeat(16, auto);\n        grid-template-areas: \n            \"header\"\n            \"slider1\"\n            \"oldMan\"\n            \"history1\"\n            \"image1\"\n            \"div1\"\n            \"div2\"\n            \"div3\"\n            \"video\"\n            \"history2\"\n            \"image2\"\n            \"history3\"\n            \"image3\"\n            \"history4\"\n            \"slider2\"\n            \"outlet\"\n            \"footer\"\n        ;\n    }\n\n    .menu-item > a {\n        font-size: 1.2rem;\n    }\n\n    .repeatDivs {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"left\"\n            \"right\"\n        ;\n    }\n\n    #imgDiv2 {\n        grid-area: right;\n    }\n\n    #videoSection {\n        flex-direction: column;\n    }\n\n    footer {\n        flex-direction: column;\n        align-items: center;\n        gap: 0.5rem !important;\n    }\n\n    #footerDiv1, #footerDiv2 {\n        gap: 1rem !important;\n    }\n\n    #footerDiv1, #footerDiv2 {\n        margin-left: 0 !important;\n    }\n\n    #footerDivOneChildTwo {\n        gap: 0.5rem !important;\n        flex-direction: column;\n    }\n\n    .foodName, .productName, .outletName {\n        font-size: 1rem;\n    }\n\n    #KLSelangorTitle, #johorTitle {\n        font-size: 0.5em;\n    }\n\n}\n\n/* Video section */\n#videoSection {\n    height: 100%;\n    grid-area: video;\n    margin-top: 5px;\n    \n    display: flex;\n    gap: 5px;\n}\n\n#videoSection > div {\n    width: 100%;\n    height: 600px;\n}\n\n#videoSection > div > iframe {\n    width: 100%;\n    height: 100%;\n}\n\n/* Titled Sections */\n#titleMainDiv1 {\n    grid-area: title1;\n}\n\n#titleMainDiv2 {\n    grid-area: title2;\n}\n\n#titleMainDiv3 {\n    grid-area: title3;\n}\n\n.titleMainDiv > div > img {\n    width: 100%;\n    height: auto;\n}\n\n/* Footer section */\nfooter {\n    grid-area: footer;\n    height: 20vh;\n    background-color: var(--header);\n\n    display: flex;\n    justify-content: center;\n    gap: 3rem;\n}\n\n#footerDiv1 {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    margin-left: 2rem;\n}\n\n#footerLogoDiv > img {\n    width: 100%;\n    height: auto;\n}\n\n#footerDivOneChildOne {\n    width: 10rem;\n    flex-wrap: wrap;\n}\n\n#footerDivOneChildTwo {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 2rem;\n}\n\n#footerDivOneChildTwo > a {\n    font-weight: bold;\n    font-size: 1.5rem;\n    flex: 0;\n\n    transition: transform 0.3s;\n}\n\n#footerDivOneChildTwo > a:hover {\n    transform: scale(1.1);\n}\n\n#footerDiv2 {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-right: 2rem;\n}\n\n#footerDivTwoChildOne {\n    color: var(--content);\n    font-weight: bold;\n    font-size: 1.5rem;\n    flex: 0;\n    white-space: nowrap;\n}\n\n#footerDivTwoChildTwo > a > img {\n    width: 2rem;\n    transition: all 0.3s;\n}\n\n#footerDivTwoChildTwo > a > img:hover {\n    transform: rotate(360deg) scale(1.2);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerSect)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _assets_footer_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/footer-logo.png */ "./src/assets/footer-logo.png");
/* harmony import */ var _assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/github-mark-white.svg */ "./src/assets/github-mark-white.svg");
// Footer section





function footerSect() {

    // Footer section
    const footerSection = document.createElement('footer');
    const footerElems = [];


    // Generate 2 divs inside footer section.
    for(let i=0; i < 2; i++) {

        const footerDiv = document.createElement('div');
        footerDiv.id = `footerDiv${i+1}`;
        footerDiv.className = 'footer';

        
        for(let j=0; j < 2; j++) {

            const footerChildDivs = document.createElement('div');
            footerChildDivs.className = 'footerChildDivs';

            footerDiv.append(footerChildDivs);

        }
        
        footerElems.push(footerDiv);
        footerSection.append(footerDiv);

    }

    // Footer logo
    const footerLogoDiv = (0,_home__WEBPACK_IMPORTED_MODULE_1__.linkImgs)(1, [_assets_footer_logo_png__WEBPACK_IMPORTED_MODULE_2__], 1, 'footerLogoDiv', '');

    // Footer children
    const footerDivOneChildOne = footerElems[0].children[0];
    footerDivOneChildOne.id = 'footerDivOneChildOne';

    // Append to first child div.
    footerDivOneChildOne.append(footerLogoDiv[0]);

    // Target second (or last) child of #footerDiv2 - (oriental kopi links)
    const footerDivOneChildTwo = footerElems[0].children[1];
    footerDivOneChildTwo.id = 'footerDivOneChildTwo';
    
    for(let linkTag=0; linkTag < 2; linkTag++) {

        const footerLink = document.createElement('a');
        footerLink.target = '_blank';

        if(linkTag == 0) {
            footerLink.textContent = 'Facebook';
            footerLink.href = 'https://www.facebook.com/orientalkopi';
        } else {
            footerLink.textContent = 'Instagram';
            footerLink.href = 'https://www.instagram.com/orientalkopi.asia/';
        }

        footerDivOneChildTwo.append(footerLink);

    }

    // Target first child of #footerDiv2 element.
    const footerDivTwoChildOne = footerElems[1].children[0];
    footerDivTwoChildOne.id = 'footerDivTwoChildOne';

    footerDivTwoChildOne.textContent = 'Created by elishamutang';

    // Target second child of #footerDiv2 element.
    const footerDivTwoChildTwo = footerElems[1].children[1];
    footerDivTwoChildTwo.id = 'footerDivTwoChildTwo';

    // Create link to GitHub profile
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/elishamutang';
    githubLink.target = '_blank';
    githubLink.innerHTML = `<img src=${_assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_3__}>`;
    footerDivTwoChildTwo.append(githubLink);

    ___WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(footerSection);

}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
// Module for generating and appending header to webpage.


function header() {
    // Main header
    const header = document.createElement("div");
    header.className = "header";
    header.id = "header";

    // Logo div
    const logoDiv = document.createElement('div');
    logoDiv.className = 'header';
    logoDiv.id = 'logoDiv';

    header.append(logoDiv);

    // Company name
    const companyName = document.createElement('div');
    companyName.id = 'companyName';

    const companyNameLink = document.createElement('a');
    companyNameLink.textContent = 'Oriental Kopi';

    companyName.append(companyNameLink);
    logoDiv.append(companyName);

    // Tabs on header div
    const tabDiv = document.createElement('div');
    tabDiv.className = 'header';
    tabDiv.id = 'tabDiv';

    header.append(tabDiv);

    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(header);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage),
/* harmony export */   linkImgs: () => (/* binding */ linkImgs)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_oriental_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/oriental_1.webp */ "./src/assets/oriental_1.webp");
/* harmony import */ var _assets_oriental_2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/oriental_2.webp */ "./src/assets/oriental_2.webp");
/* harmony import */ var _assets_oriental_3_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/oriental_3.webp */ "./src/assets/oriental_3.webp");
/* harmony import */ var _assets_oriental_4_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/oriental_4.webp */ "./src/assets/oriental_4.webp");
/* harmony import */ var _assets_oriental_5_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/oriental_5.webp */ "./src/assets/oriental_5.webp");
/* harmony import */ var _assets_owner_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/owner_1.jpg */ "./src/assets/owner_1.jpg");
/* harmony import */ var _assets_owner_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/owner_2.jpg */ "./src/assets/owner_2.jpg");
/* harmony import */ var _assets_wordSectionHeader_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/wordSectionHeader.png */ "./src/assets/wordSectionHeader.png");
/* harmony import */ var _assets_bun_pic_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/bun_pic.jpg */ "./src/assets/bun_pic.jpg");
/* harmony import */ var _assets_coffee_pic_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/coffee_pic.jpg */ "./src/assets/coffee_pic.jpg");
/* harmony import */ var _assets_egg_tart_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/egg_tart.jpg */ "./src/assets/egg_tart.jpg");
/* harmony import */ var _assets_coffee_pic_word_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/coffee_pic_word.png */ "./src/assets/coffee_pic_word.png");
/* harmony import */ var _assets_coffee_pic_word_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/coffee_pic_word_2.png */ "./src/assets/coffee_pic_word_2.png");
/* harmony import */ var _assets_egg_tart_word_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/egg_tart_word.png */ "./src/assets/egg_tart_word.png");
/* harmony import */ var _assets_egg_tart_word_2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/egg_tart_word_2.png */ "./src/assets/egg_tart_word_2.png");
/* harmony import */ var _assets_bun_word_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/bun_word.png */ "./src/assets/bun_word.png");
/* harmony import */ var _assets_bun_word_2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/bun_word_2.png */ "./src/assets/bun_word_2.png");
/* harmony import */ var _assets_huayangClassicHeader_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/huayangClassicHeader.png */ "./src/assets/huayangClassicHeader.png");
/* harmony import */ var _assets_randomHeaderImgTwo_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/randomHeaderImgTwo.jpg */ "./src/assets/randomHeaderImgTwo.jpg");
/* harmony import */ var _assets_handmadeBreadImg_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/handmadeBreadImg.png */ "./src/assets/handmadeBreadImg.png");
/* harmony import */ var _assets_randomHeaderImg3_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/randomHeaderImg3.jpg */ "./src/assets/randomHeaderImg3.jpg");
/* harmony import */ var _assets_headerImg1_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/headerImg1.jpg */ "./src/assets/headerImg1.jpg");
/* harmony import */ var _assets_heading_flower_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/heading-flower.png */ "./src/assets/heading-flower.png");
/* harmony import */ var _assets_mala_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/mala-pan-mee.jpg */ "./src/assets/mala-pan-mee.jpg");
/* harmony import */ var _assets_sambal_rojak_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/sambal-rojak.jpg */ "./src/assets/sambal-rojak.jpg");
/* harmony import */ var _assets_soup_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/soup-pan-mee.jpg */ "./src/assets/soup-pan-mee.jpg");
/* harmony import */ var _assets_teh_tarik_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/teh-tarik.jpg */ "./src/assets/teh-tarik.jpg");
/* harmony import */ var _assets_branch_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/branch.jpg */ "./src/assets/branch.jpg");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
// Homepage (or initial load-up page)



































// Use this function to load homepage
function homePage() {

    // Append in order
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(slider(5, [_assets_oriental_1_webp__WEBPACK_IMPORTED_MODULE_1__, _assets_oriental_2_webp__WEBPACK_IMPORTED_MODULE_2__, _assets_oriental_3_webp__WEBPACK_IMPORTED_MODULE_3__, _assets_oriental_4_webp__WEBPACK_IMPORTED_MODULE_4__, _assets_oriental_5_webp__WEBPACK_IMPORTED_MODULE_5__], 1, 'sliderOne'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(oldManDiv());
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(history().historySection);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(randomHeaderImage('firstHeader', _assets_headerImg1_jpg__WEBPACK_IMPORTED_MODULE_22__));
    
    const repeatedDivs = Array.from(repetitiveDivs().repeatedDivs);
    
    repeatedDivs.forEach((div) => {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(div);
    })
    
    repetitiveDivs().insertWords();

    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(videoDiv());
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(history().huayangDiv());
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(randomHeaderImage('secondHeader', _assets_randomHeaderImgTwo_jpg__WEBPACK_IMPORTED_MODULE_19__));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(history().handmadeBread());
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(randomHeaderImage('thirdHeader', _assets_randomHeaderImg3_jpg__WEBPACK_IMPORTED_MODULE_21__));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(history().signatureMerchandise());
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(slider(4, [_assets_sambal_rojak_jpg__WEBPACK_IMPORTED_MODULE_25__, _assets_mala_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_24__, _assets_soup_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_26__, _assets_teh_tarik_jpg__WEBPACK_IMPORTED_MODULE_27__], 1, 'sliderTwo'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(productSlider());
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(history().outlets());
    
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_30__["default"])();
}


// Slider for homepage.
function slider(numOfImgs, imageData, numOfDivs, sliderID) {

    // Create sliderWrapper div
    const sliderWrapper = document.createElement('div');
    sliderWrapper.id = sliderID;

    // Call function.
    let images = linkImgs(numOfImgs, imageData, numOfDivs, 'wrapper', 'wrapper');

    // Append wrapper to sliderWrapper
    images.forEach((image) => {
        sliderWrapper.append(image);
    })

    return sliderWrapper;

}

// Product slider (aka sliderTwo) containing two image carousels.
function productSlider() {

    const products = [_assets_sambal_rojak_jpg__WEBPACK_IMPORTED_MODULE_25__, _assets_mala_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_24__, _assets_soup_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_26__, _assets_teh_tarik_jpg__WEBPACK_IMPORTED_MODULE_27__];

    const sliderTwo = document.querySelector('#sliderTwo');
    const secondSet = linkImgs(4, products, 1, '', 'wrapper');

    secondSet.forEach((img) => {
        sliderTwo.append(img);
    })

    return sliderTwo;

}

// General function to link image tag to div (wrapper).
function linkImgs(numOfImgs, imageData, numOfDivs, divID, divClass) {

    let imageDivArr = []

    for(let i=0; i < numOfDivs; i++) {

        const imageDiv = document.createElement('div');

        if(divID === '') {
            imageDiv.removeAttribute('id');
        } else {
            imageDiv.id = `${divID}${i+1}`;
        }

        if(divClass === '') {
            imageDiv.removeAttribute('class');
        } else {
            imageDiv.className = divClass;
        }

        if(numOfDivs == 1) {

            imageDiv.id = divID;

            for(let j=0; j < numOfImgs; j++) {

                const image = document.createElement('img');
    
                image.src = imageData[j];
    
                imageDiv.append(image);
    
            }

        } else {

            const image = document.createElement('img');
            image.src = imageData[i];

            imageDiv.append(image);

        }

        imageDivArr.push(imageDiv);

    }

    return imageDivArr;

}

// Picture of old owner.
function oldManDiv() {

    // Old owner picture(?)
    const oldImg = document.createElement('div');
    oldImg.id = 'oldImg';

    // Since there are 2 images, create a wrapper
    const oldImgWrapper = document.createElement('div');
    oldImgWrapper.id = 'oldImgWrapper';

    // Create two separate divs to contain each img.
    const wrapperOne = document.createElement('div');
    wrapperOne.id = 'wrapperOne';

    const wrapperTwo = document.createElement('div');
    wrapperTwo.id = 'wrapperTwo';

    // Create img tags and append inside respective wrappers
    const ownerOneImg = document.createElement('img');
    ownerOneImg.src = _assets_owner_1_jpg__WEBPACK_IMPORTED_MODULE_6__;

    const ownerTwoImg = document.createElement('img');
    ownerTwoImg.src = _assets_owner_2_jpg__WEBPACK_IMPORTED_MODULE_7__;

    wrapperOne.append(ownerOneImg);
    wrapperTwo.append(ownerTwoImg);

    oldImgWrapper.append(wrapperOne);
    oldImgWrapper.append(wrapperTwo);

    oldImg.append(oldImgWrapper);

    return oldImg;

}

// History section
function history() {

    // Word section after old owner image
    
    const historySection = document.createElement('div');
    historySection.id = 'historySection';
    historySection.className = 'historySection';

    const historySectionTitle = (0,_menu_js__WEBPACK_IMPORTED_MODULE_29__.orientalTitle)('historySectionTitle', 'Brand Story');

    const historySectionWords = document.createElement('div');
    historySectionWords.id = 'historySectionWords';
    historySectionWords.className = 'historySectionWords';

    const firstPara = document.createElement('p');
    firstPara.id = 'firstPara';
    firstPara.textContent = `Master Huayang's ancestors came from Hainan. In his early days, he "ran foreign ships" to make a living in Southeast Asia. Over the years, he has become proficient in Western cuisine by working as a chef on ships. He has combined the essence of traditional Chinese food with exquisite snacks such as pastry egg tarts and pineapple buns to form today's Huayang Nanyang cuisine, especially the pastry egg tarts and ice-fire pineapple buns.`

    const secondPara = document.createElement('p');
    secondPara.id = 'secondPara';
    secondPara.textContent = `Huayang Teahouse carries the hometown feelings of overseas Chinese in Nanyang, and Huayang Coffee records the hard-working lives of overseas Chinese in the early days. Huayang Coffee is thick and mellow. Three kinds of high-quality coffee beans [Arabica, Robusta, and Liberica] are blended in a golden ratio and roasted at high temperatures to create a rich and mellow Huayang Coffee.`;

    const thirdPara = document.createElement('p');
    thirdPara.id = 'thirdPara';
    thirdPara.textContent = `Huayang has always adhered to the traditional cultural essence of Chinese cuisine, pursuing the highest quality raw materials and fresh ingredients. Following the traditional craftsmanship passed down by Huayang’s master chefs, we carefully research and produce dishes that are perfect in color, aroma and taste. Nanyang style cuisine, dim sum and sweet stew.`;

    // Append each paragraph to word section.
    historySectionWords.append(firstPara);
    historySectionWords.append(secondPara);
    historySectionWords.append(thirdPara);

    // Append header and wording to section.
    historySection.append(historySectionTitle);
    historySection.append(historySectionWords);

    function huayangDiv() {

        // Huayang Classic section
        const huayangClassic = document.createElement('div');
        huayangClassic.id = 'huayangClassic';
        huayangClassic.className = 'historySection';

        const huayangTitleDiv = (0,_menu_js__WEBPACK_IMPORTED_MODULE_29__.orientalTitle)('huayangTitleDiv', 'Malaysian Local Cuisine');
    
        const huayangWords = document.createElement('div');
        huayangWords.id = 'huayangWords';
        huayangWords.className = 'historySectionWords';
    
        const huayangPara1 = document.createElement('p');
        huayangPara1.id = 'huayangPara1';
        huayangPara1.textContent = 'Huayang adheres to the cultural essence of traditional Nanyang cuisine, pursues the highest quality raw materials and fresh ingredients, and follows the traditional craftsmanship passed down by Huayang’s old masters, carefully researching and producing Nanyang dishes that are perfect in color, aroma and taste. Flavored dishes, snacks and stewed sugar water.';
    
        const huayangPara2 = document.createElement('p');
        huayangPara2.id = 'huayangPara2';
        huayangPara2.textContent = 'Huayang is committed to delivering delicious traditional Nanyang cuisine. Famous signature delicacies include Huayang coffee, pastry egg tarts, classic nasi lemak, rice siam, curry chicken rice, shredded chicken rice noodles, etc. Each representative food carries The hometown feelings and the essence of food culture of early Nanyang overseas Chinese.';
    
        // Append huayang paragraphs to div
        huayangWords.append(huayangPara1);
        huayangWords.append(huayangPara2);
    
        // Append huayang header and words div to huayang classic.
        huayangClassic.append(huayangTitleDiv);
        huayangClassic.append(huayangWords);

        return huayangClassic;
    
    }

    // Handmade bread section
    function handmadeBread() {

        const handmadeBreadDiv = document.createElement('div');
        handmadeBreadDiv.id = 'handmadeBreadDiv';
        handmadeBreadDiv.className = 'historySection';

        const handmadeBreadHeader = (0,_menu_js__WEBPACK_IMPORTED_MODULE_29__.orientalTitle)('handmadeBreadHeader', 'Homemade Traditional Toast');

        const handmadeBreadWords = document.createElement('div');
        handmadeBreadWords.id = 'handmadeBreadWords';
        handmadeBreadWords.className = 'historySectionWords';

        const handmadeBreadPara = document.createElement('p');
        handmadeBreadPara.id = 'handmadeBreadPara';
        handmadeBreadPara.textContent = `The homemade thick bread is baked over medium heat, flipping it from front to back so that both sides of the bread are evenly heated and baked until golden and crispy! Paired with a variety of delicious ingredients with different flavors, you will feel the rich, crispy and fragrant taste with every bite!`;
        handmadeBreadWords.append(handmadeBreadPara);

        handmadeBreadDiv.append(handmadeBreadHeader);
        handmadeBreadDiv.append(handmadeBreadWords);

        return handmadeBreadDiv;

    }

    function signatureMerchandise() {

        let headerImgArr = [];
        let signatureTextArr = ['Oriental Kopi adheres to the philosophy of blending tradition with innovation while preserving heritage. We made our own specialties with meticulous craftsmanship and premium ingredients, continuing the legacy of Malaysia’s authentic flavours!',
                                'Each Oriental Kopi specialty embodies the fusion of traditional and modern tastes, meticulously developed with dedication. Our goal is to present the highest quality and deliciousness, ensuring that every bite is a delightful experience. Whether for personal enjoyment or as a thoughtful gift, Oriental Kopi specialties are definitely the best choice!']; 

        // Signature section
        const signatureSect = document.createElement('div');
        signatureSect.id = 'signatureSect';
        signatureSect.className = 'historySection non-img';

        // Header container
        const signatureHeader = document.createElement('div');
        signatureHeader.className = 'signatureHeader';
        
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = 'Signature Merchandise';
        headerTitle.className = 'headerTitle';

        // Text content
        const signatureText = document.createElement('div');
        signatureText.id = 'signatureText';
        signatureText.className = 'historySectionWords';

        for(let i=0; i < 2; i++) {

            // Header
            const headerDivs = document.createElement('div');
            headerDivs.className = 'headerDivs';
            headerDivs.id = `headerDivs${i+1}`;

            const headerImgs = document.createElement('img');
            headerImgs.src = _assets_heading_flower_png__WEBPACK_IMPORTED_MODULE_23__;

            headerDivs.append(headerImgs);

            headerImgArr.push(headerDivs);

            // Paragraphs
            const signaturePara = document.createElement('p');
            signaturePara.textContent = `${signatureTextArr[i]}`;
            signatureText.append(signaturePara);

        }

        signatureHeader.append(headerImgArr[0]);
        signatureHeader.append(headerTitle);
        signatureHeader.append(headerImgArr[1]);
        signatureSect.append(signatureHeader);
        signatureSect.append(signatureText);



        return signatureSect;
    }

    function outlets() {

        // Outlet section
        const outletDiv = document.createElement('div');
        outletDiv.id = 'outletDiv';
        outletDiv.className = 'historySection non-img';

        // Header div
        const outletHeader = (0,_menu_js__WEBPACK_IMPORTED_MODULE_29__.orientalTitle)('outletHeader non-img', 'Outlets');

        // Content div (image only);
        const contentImg = linkImgs(1, [_assets_branch_jpg__WEBPACK_IMPORTED_MODULE_28__], 1, 'outlet', 'headerImg');

        // Outlet link
        const outletLink  = document.createElement('button');
        outletLink.id = 'outletLink';
        outletLink.textContent = 'Our Outlets';

        // Event listener to outlets page.
        outletLink.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.tabSwitch);

        outletDiv.append(outletHeader);
        outletDiv.append(contentImg[0]);
        outletDiv.append(outletLink);

        return outletDiv;

    }


    return {
        huayangDiv,
        historySection,
        handmadeBread,
        signatureMerchandise,
        outlets
    };

}

// A random (probably not random) image section.
function randomHeaderImage(elemId, imgSrc) {

    const randomHeaderDiv = document.createElement('div');
    randomHeaderDiv.id = elemId;
    randomHeaderDiv.className = 'headerImg';

    const randomHeaderImg = document.createElement('img');
    randomHeaderImg.src = imgSrc;

    randomHeaderDiv.append(randomHeaderImg);

    return randomHeaderDiv;

}

// Section where there are 3 images with words next to them.
function repetitiveDivs() {

    let repeatDiv;
    let wordDiv;
    let wordChildDiv;
    let repeatedDivs = [];

    // Each div will contain a word section and image section, so generate 3 img tags.
    const imageData = [_assets_coffee_pic_jpg__WEBPACK_IMPORTED_MODULE_10__, _assets_egg_tart_jpg__WEBPACK_IMPORTED_MODULE_11__, _assets_bun_pic_jpg__WEBPACK_IMPORTED_MODULE_9__];

    // Images is an array of the images from imageData
    const images = linkImgs(3, imageData, 3, 'imgDiv');

    // Generate 3 similar divs with 2 div in each parent div.
    for(let i=0; i < 3; i++) {

        // Parent div
        repeatDiv = document.createElement('div');
        repeatDiv.className = `repeatDivs`;
        repeatDiv.id = `repeatDiv${i+1}`;
        repeatedDivs.push(repeatDiv);

        // Word div
        wordDiv = document.createElement('div');
        wordDiv.id = `wordDiv${i+1}`;
        wordDiv.className = 'wordDiv';

        // Word child divs
        for(let j=0; j < 3; j++) {

            wordChildDiv = document.createElement('div');
            wordChildDiv.id = `wordChildDiv-${i+1}-${j+1}`;
            wordDiv.append(wordChildDiv);
            
            if(j < 2) {
                const wordChildImg = document.createElement('img');
                wordChildImg.id = `wordChildImg${j+1}`;
                wordChildDiv.append(wordChildImg);
            }

        }

        repeatedDivs[i].append(wordDiv);

        // Append image divs
        repeatDiv.append(images[i]);

    }

    // Insert images to word section.
    function insertImg() {

        const wordImgTags = Array.from(document.querySelectorAll('.repeatDivs > div > div > img'));

        const wordImgArr = [_assets_coffee_pic_word_png__WEBPACK_IMPORTED_MODULE_12__, _assets_coffee_pic_word_2_png__WEBPACK_IMPORTED_MODULE_13__, _assets_egg_tart_word_png__WEBPACK_IMPORTED_MODULE_14__, _assets_egg_tart_word_2_png__WEBPACK_IMPORTED_MODULE_15__, _assets_bun_word_png__WEBPACK_IMPORTED_MODULE_16__, _assets_bun_word_2_png__WEBPACK_IMPORTED_MODULE_17__];

        for(let idx=0; idx < wordImgTags.length; idx++) {

            wordImgTags[idx].src = wordImgArr[idx];

        }

    }

    insertImg();


    // Insert wording to word section div.

    function insertWords() {

        const lastWordChildDiv = Array.from(document.querySelectorAll('.wordDiv > div:last-child'));

        lastWordChildDiv[0].textContent = `Huayang adheres to the spirit of traditional Nanyang coffee culture, insists on selecting high-quality coffee beans, and mixes three types of high-quality coffee beans [Arabica, Robusta, and Liberica] in golden proportions. The brewed coffee is full of fragrance, thick and mellow.`;
        lastWordChildDiv[1].textContent = `Huayang uses traditional craftsmanship to make egg tarts. After years of careful research and improvement, it uses an exclusive formula to produce the "Huayang Crispy Egg Tart" with "color, aroma and taste"! Huayang Egg Tarts are hand-made one by one, and each layer of dense tart crust is folded repeatedly. It tastes like Huayang Egg Tarts are hand-made one by one, with each dense layer of tart crust folded repeatedly. Every bite is filled with rich egg fragrance, with a tinge of flavor. Sweet but not greasy, crispy and rich taste!`;
        lastWordChildDiv[2].textContent = `Huayang uses ancient techniques to make pineapple buns. An exclusive recipe produces golden, crispy and delicious traditional pineapple buns. Each pineapple bun is hand-made. The outer layer is baked at high temperature to become golden and crispy, while the bottom is It will be crispy and soft. Paired with cool butter, honey or condensed milk, the blend of hot and cold will elevate the entire taste of pineapple buns to another level.`;

    }

    return {
        repeatedDivs,
        insertWords
    };

}

// Video section of homepage.
function videoDiv() {

    const videoSection = document.createElement('div');
    videoSection.id = `videoSection`;

    const videoLinks = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/jaRBPZtMnI8?si=hYWkZAs7-kbKJKK9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>`, 
                        `<iframe width="560" height="315" src="https://www.youtube.com/embed/KhzpxCoyTkw?si=eOcI_NTy21bRf2Lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>`,
                        `<iframe width="560" height="315" src="https://www.youtube.com/embed/3tIc4aTF3Wo?si=gKHwQDauMJDreOXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>`]

    // Generate 3 video wrapper divs.
    for(let i=0; i < 3; i++) {

        const videoWrapperDiv = document.createElement('div');
        videoWrapperDiv.id = `videoSection${i+1}`;
        videoWrapperDiv.innerHTML = videoLinks[i];

        videoSection.append(videoWrapperDiv);

    }

    return videoSection;

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContainer: () => (/* binding */ mainContainer),
/* harmony export */   tabSwitch: () => (/* binding */ tabSwitch)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _navBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBar.js */ "./src/navBar.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products */ "./src/products.js");
/* harmony import */ var _outlets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./outlets */ "./src/outlets.js");
// This module is the main module containing of the tab switching logic.










// Target main container div
const mainContainer = document.querySelector('#mainContainer');
mainContainer.className = 'home';


// Load DOM
(function DOMHandler() {

    // Load header and navBar.
    (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_navBar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    
    // Initial load-up shows homepage.
    (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

    // Add event listener to navBar elements and page title/company name.
    const headerLinks = document.querySelectorAll('div .menu-item');

    headerLinks.forEach((link) => {
        link.addEventListener('click', tabSwitch);
    })

    const titleLink = document.querySelector('#companyName');
    titleLink.addEventListener('click', tabSwitch);

})();

// Tab switching logic
function tabSwitch(e) {
    
    // Target nav bar elements
    let linkElems = e.target.textContent;
    console.log(linkElems);

    // Clear content
    const pageContent = Array.from(document.querySelectorAll('#mainContainer > div, footer'));
    pageContent.splice(0, 1);

    pageContent.forEach((div) => {
        // Remove each div except for header from the DOM.
        div.remove();
    })

    // Re-directs user to top of page when switching between pages.
    window.scrollTo(0,0);

    switch(linkElems) {

        case 'Home':
        case 'Oriental Kopi':
            mainContainer.className = 'home';
            (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
            break;

        case 'Menu':
            mainContainer.className = 'menu';
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
            break;

        case 'Products':
            mainContainer.className = 'products';
            (0,_products__WEBPACK_IMPORTED_MODULE_6__["default"])();
            break;

        case 'Outlets':
        case 'Our Outlets':
            mainContainer.className = 'outlets';
            (0,_outlets__WEBPACK_IMPORTED_MODULE_7__["default"])();
            break;
    }

}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage),
/* harmony export */   orientalTitle: () => (/* binding */ orientalTitle)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_randomHeaderImgTwo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/randomHeaderImgTwo.jpg */ "./src/assets/randomHeaderImgTwo.jpg");
/* harmony import */ var _assets_heading_flower_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/heading-flower.png */ "./src/assets/heading-flower.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _assets_nasi_lemak_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/nasi-lemak.jpg */ "./src/assets/nasi-lemak.jpg");
/* harmony import */ var _assets_malay_rendang_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/malay-rendang-chicken.jpg */ "./src/assets/malay-rendang-chicken.jpg");
/* harmony import */ var _assets_mee_siam_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/mee-siam.jpg */ "./src/assets/mee-siam.jpg");
/* harmony import */ var _assets_chicken_hor_fun_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/chicken-hor-fun.jpg */ "./src/assets/chicken-hor-fun.jpg");
/* harmony import */ var _assets_char_kuey_teow_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/char-kuey-teow.jpg */ "./src/assets/char-kuey-teow.jpg");
/* harmony import */ var _assets_curry_laksa_mee_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/curry-laksa-mee.jpg */ "./src/assets/curry-laksa-mee.jpg");
/* harmony import */ var _assets_nanyang_curry_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/nanyang-curry.jpg */ "./src/assets/nanyang-curry.jpg");
/* harmony import */ var _assets_hainanese_chicken_rice_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/hainanese-chicken-rice.jpg */ "./src/assets/hainanese-chicken-rice.jpg");
/* harmony import */ var _assets_malay_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/malay-fried-rice.jpg */ "./src/assets/malay-fried-rice.jpg");
/* harmony import */ var _assets_prawn_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/prawn-fried-rice.jpg */ "./src/assets/prawn-fried-rice.jpg");
/* harmony import */ var _assets_signature_egg_tart_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/signature-egg-tart.jpg */ "./src/assets/signature-egg-tart.jpg");
/* harmony import */ var _assets_polo_bun_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/polo-bun.jpg */ "./src/assets/polo-bun.jpg");
/* harmony import */ var _assets_double_butter_kaya_toast_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/double-butter-kaya-toast.jpg */ "./src/assets/double-butter-kaya-toast.jpg");
/* harmony import */ var _assets_rojak_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/rojak.jpg */ "./src/assets/rojak.jpg");
/* harmony import */ var _assets_oriental_kopi_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/oriental-kopi.jpg */ "./src/assets/oriental-kopi.jpg");
/* harmony import */ var _assets_cendol_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/cendol.jpg */ "./src/assets/cendol.jpg");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
// Menu page






















function menuPage() {

    // Header image
    const menuImgDiv = document.createElement('div');
    menuImgDiv.id = 'menuImgDiv';
    menuImgDiv.className = 'headerImg';

    const menuImgTag = document.createElement('img');
    menuImgTag.src = _assets_randomHeaderImgTwo_jpg__WEBPACK_IMPORTED_MODULE_1__;

    menuImgDiv.append(menuImgTag);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(menuImgDiv);
    
    // Append signature menu section.
    const signatureTitle = orientalTitle('signatureMenu', 'Signature Menu');
    
    signatureTitle.append(menuItems());

    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(signatureTitle);

    (0,_footer_js__WEBPACK_IMPORTED_MODULE_20__["default"])();

}

function orientalTitle(sectionID, title) {

    // Signature menu section
    const sectionDiv = document.createElement('div');
    sectionDiv.id = sectionID;
    sectionDiv.className = 'non-img';

    // Signature menu heading
    const titleDiv = document.createElement('div');
    titleDiv.className = 'signatureHeader';

    const titleText = document.createElement('h1');
    titleText.textContent = title;
    titleText.className = 'headerTitle';

    const flowerDivs = [];

    for(let i=0; i<2; i++) {

        const flowerImg = document.createElement('img');
        flowerImg.src = _assets_heading_flower_png__WEBPACK_IMPORTED_MODULE_2__;

        const flowerImgDiv = document.createElement('div');
        flowerImgDiv.className = 'flowerImg';

        flowerImgDiv.append(flowerImg);

        flowerDivs.push(flowerImgDiv);
        titleDiv.append(flowerImgDiv);

    }

    const lastFlowerDiv = flowerDivs[1];
    lastFlowerDiv.insertAdjacentElement('beforebegin', titleText);

    sectionDiv.append(titleDiv);

    return sectionDiv;

}

function menuItems() {

    const foodNames = ['Nasi Lemak', 'Malay Rendang Chicken', 'Mee Siam', 'Chicken Hor Fun', 'Char Kuey Teow', 'Curry Laksa Mee',
                        'Nanyang Curry', 'Hainanese Chicken Rice', 'Malay Fried Rice', 'Prawn Fried Rice', 'Signature Egg Tart',
                        'Polo Bun', 'Double Butter Kaya Toast', 'Rojak', 'Oriental Kopi', 'Cendol'];

    const foodImgs = [_assets_nasi_lemak_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_malay_rendang_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_mee_siam_jpg__WEBPACK_IMPORTED_MODULE_6__, _assets_chicken_hor_fun_jpg__WEBPACK_IMPORTED_MODULE_7__, _assets_char_kuey_teow_jpg__WEBPACK_IMPORTED_MODULE_8__, _assets_curry_laksa_mee_jpg__WEBPACK_IMPORTED_MODULE_9__, _assets_nanyang_curry_jpg__WEBPACK_IMPORTED_MODULE_10__,
                        _assets_hainanese_chicken_rice_jpg__WEBPACK_IMPORTED_MODULE_11__, _assets_malay_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_12__, _assets_prawn_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_13__, _assets_signature_egg_tart_jpg__WEBPACK_IMPORTED_MODULE_14__, _assets_polo_bun_jpg__WEBPACK_IMPORTED_MODULE_15__, _assets_double_butter_kaya_toast_jpg__WEBPACK_IMPORTED_MODULE_16__,
                        _assets_rojak_jpg__WEBPACK_IMPORTED_MODULE_17__, _assets_oriental_kopi_jpg__WEBPACK_IMPORTED_MODULE_18__, _assets_cendol_jpg__WEBPACK_IMPORTED_MODULE_19__];

    // Create container to display each food.
    const foodItems = (0,_home_js__WEBPACK_IMPORTED_MODULE_3__.linkImgs)(foodNames.length, foodImgs, foodNames.length, 'foodItem', 'foodItems');

    const foodContainer = document.createElement('div');
    foodContainer.id = 'foodContainer';

    for(let i=0; i<foodItems.length; i++) {

        // Add overlay for each food item to display name.
        const foodNameDiv = document.createElement('div');
        foodNameDiv.className = 'foodName';
        foodNameDiv.textContent = foodNames[i];

        // Event listener for mouse over.

        foodItems[i].addEventListener('mouseover', (e) => {
            foodItems[i].insertAdjacentElement('afterbegin', foodNameDiv);
            
            if(e.target.className == 'foodName') {
                e.target.className = 'foodName fade-in';
            }

        })

        foodItems[i].addEventListener('mouseout', (e) => {
            if(e.target.className == 'foodName fade-in') {
                e.target.className = 'foodName';
            }

        })

        foodContainer.append(foodItems[i]);

    }

    return foodContainer;

}

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBar)
/* harmony export */ });
// Menu bar for webpage.
function navBar() {

    const menuBarItems = ['Home', 'Menu', 'Products', 'Outlets'];
    const menuBarDivs = [];
    const tabDiv = document.querySelector('#tabDiv'); 

    for(let i = 0; i < menuBarItems.length; i++) {
        const item = document.createElement('div');
        item.dataset.index = `${i}`;
        item.className = 'menu-item';
        menuBarDivs.push(item);

        const itemLink = document.createElement('a');
        itemLink.textContent = `${menuBarItems[i]}`;

        menuBarDivs[i].append(itemLink);
    }

    menuBarDivs.forEach((div) => {
        tabDiv.append(div);
    });

}


/***/ }),

/***/ "./src/outlets.js":
/*!************************!*\
  !*** ./src/outlets.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ outletPage)
/* harmony export */ });
/* harmony import */ var _assets_oriental_picture_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/oriental_picture.jpg */ "./src/assets/oriental_picture.jpg");
/* harmony import */ var _assets_mid_valley_megamall_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/mid_valley_megamall.jpg */ "./src/assets/mid_valley_megamall.jpg");
/* harmony import */ var _assets_pavillion_kl_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pavillion_kl.jpg */ "./src/assets/pavillion_kl.jpg");
/* harmony import */ var _assets_trx_kl_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/trx_kl.jpg */ "./src/assets/trx_kl.jpg");
/* harmony import */ var _assets_klcc_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/klcc.jpg */ "./src/assets/klcc.jpg");
/* harmony import */ var _assets_sunway_pyramid_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sunway_pyramid.jpg */ "./src/assets/sunway_pyramid.jpg");
/* harmony import */ var _assets_pavillion_bukit_jalil_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/pavillion_bukit_jalil.jpg */ "./src/assets/pavillion_bukit_jalil.jpg");
/* harmony import */ var _assets_klia2_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/klia2.webp */ "./src/assets/klia2.webp");
/* harmony import */ var _assets_puchong_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/puchong.jpg */ "./src/assets/puchong.jpg");
/* harmony import */ var _assets_mid_valley_jb_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/mid_valley_jb.jpg */ "./src/assets/mid_valley_jb.jpg");
/* harmony import */ var _assets_jb_city_square_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/jb_city_square.jpg */ "./src/assets/jb_city_square.jpg");
/* harmony import */ var _assets_aeon_tebrau_city_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/aeon_tebrau_city.jpg */ "./src/assets/aeon_tebrau_city.jpg");
/* harmony import */ var _assets_johor_jaya_jb_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/johor_jaya_jb.jpeg */ "./src/assets/johor_jaya_jb.jpeg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
// Outlets page.



















function outletPage() {

    // Header image
    const outletHeaderDiv = document.createElement('div');
    outletHeaderDiv.id = 'outletHeader';
    outletHeaderDiv.className = 'headerImg';

    const outletHeaderImg = document.createElement('img');
    outletHeaderImg.src = _assets_oriental_picture_jpg__WEBPACK_IMPORTED_MODULE_0__;

    outletHeaderDiv.append(outletHeaderImg);
    _index_js__WEBPACK_IMPORTED_MODULE_13__.mainContainer.append(outletHeaderDiv);

    // Outlet title
    const outletTitle = (0,_menu_js__WEBPACK_IMPORTED_MODULE_14__.orientalTitle)('outletSection', 'Our Outlets');

    outletTitle.append(outletSect());

    _index_js__WEBPACK_IMPORTED_MODULE_13__.mainContainer.append(outletTitle);

    (0,_footer__WEBPACK_IMPORTED_MODULE_16__["default"])();

}

function outletSect() {

    const outletInfos = outletInfo();

    // Initialize outlet section.
    const outletContainer = document.createElement('div');
    outletContainer.id = 'outletContainer';

    // KL Selangor Area
    const KLSelangorArea = document.createElement('div');
    KLSelangorArea.id = 'KLSelangorArea';

    // Johor Area
    const johorSect = document.createElement('div');
    johorSect.id = 'johorSect';

    outletContainer.append(KLSelangorArea);
    outletContainer.append(johorSect);

    // Extract outlet images from outletInfo().
    const KLSelangorImgs = [];

    for(let i = 0; i < outletInfos.kualaLumpurSelangor.length; i++) {
        KLSelangorImgs.push(outletInfos.kualaLumpurSelangor[i].img);
    };

    const johorImgs = [];

    for(let j = 0; j < outletInfos.johorArea.length; j++) {
        johorImgs.push(outletInfos.johorArea[j].img);
    }

    // Add mall images behind each outlet div and make it overlay like menu and product pages.
    const KLSelangorImgDivs = (0,_home_js__WEBPACK_IMPORTED_MODULE_15__.linkImgs)(KLSelangorImgs.length, KLSelangorImgs, KLSelangorImgs.length, 'KL-Selangor-Outlet', 'outletClass');

    // KL Selangor Area.
    const KLSelangorImgDivResult = generateOverlay(KLSelangorImgDivs, outletInfos.kualaLumpurSelangor);

    KLSelangorImgDivResult.forEach((outlet) => {
        KLSelangorArea.append(outlet);
    })

    // Johor Area.
    const johorImgDivs = (0,_home_js__WEBPACK_IMPORTED_MODULE_15__.linkImgs)(johorImgs.length, johorImgs, johorImgs.length, 'Johor-Outlet', 'outletClass');

    const johorImgDivResult = generateOverlay(johorImgDivs, outletInfos.johorArea);

    johorImgDivResult.forEach((outlet) => {
        johorSect.append(outlet);
    })

    // Area titles
    const KLSelangorTitle = (0,_menu_js__WEBPACK_IMPORTED_MODULE_14__.orientalTitle)('KLSelangorTitle', 'Kuala Lumpur & Selangor Area');

    KLSelangorArea.insertAdjacentElement('afterbegin', KLSelangorTitle);

    const johorTitle = (0,_menu_js__WEBPACK_IMPORTED_MODULE_14__.orientalTitle)('johorTitle', 'Johor Area');

    johorSect.insertAdjacentElement('afterbegin', johorTitle);

    return outletContainer;

}


function generateOverlay(imgDiv, outlet) {

    const resultDiv = [];

    for(let i=0; i<imgDiv.length; i++) {

        // Add overlay for each product to display product name.
        const outletNameDiv = document.createElement('div');
        outletNameDiv.className = 'outletName';
        outletNameDiv.innerHTML = `${outlet[i].name}<br>
                                    ${outlet[i].time}<br>
                                    ${outlet[i].location}`;

        // Event listener for mouse over.

        imgDiv[i].addEventListener('mouseover', (e) => {
            imgDiv[i].insertAdjacentElement('afterbegin', outletNameDiv);
            
            if(e.target.className == 'outletName') {
                e.target.className = 'outletName fade-in';
            }

        })

        imgDiv[i].addEventListener('mouseout', (e) => {
            if(e.target.className == 'outletName fade-in') {
                e.target.className = 'outletName';
            }
        })

        resultDiv.push(imgDiv[i]);

    }

    return resultDiv;

}


function outletInfo() {

    const kualaLumpurSelangor = [
        {
            name: 'Mid Valley Megamall',
            time: '8am - 10pm',
            location: 'LG-043, Lower Ground Floor',
            img: _assets_mid_valley_megamall_jpg__WEBPACK_IMPORTED_MODULE_1__
        },
        {
            name: 'Pavillion Kuala Lumpur',
            time: '9am - 10pm',
            location: 'Lot 1.30, 1.31, Level 1',
            img: _assets_pavillion_kl_jpg__WEBPACK_IMPORTED_MODULE_2__
        },
        {
            name: 'TRX',
            time: '9am - 10pm',
            location: 'C.45.0 & C.46.0, Level Concourse',
            img: _assets_trx_kl_jpg__WEBPACK_IMPORTED_MODULE_3__
        },
        {
            name: 'KLCC',
            time: '8am - 10pm',
            location: 'Lot 414-415 & OS404, Level 4',
            img: _assets_klcc_jpg__WEBPACK_IMPORTED_MODULE_4__ 
        },
        {
            name: 'Sunway Pyramid',
            time: ['Mon-Fri: 9am - 10pm', '<br> Sat-Sun: 8am - 10pm'],
            location: 'Blue Atrium, Lot G1.108 & 109, Ground Floor',
            img: _assets_sunway_pyramid_jpg__WEBPACK_IMPORTED_MODULE_5__
        },
        {
            name: 'Pavillion Bukit Jalil',
            time: '9am - 10pm',
            location: 'Level 1 (No. 22 & 23)',
            img: _assets_pavillion_bukit_jalil_jpg__WEBPACK_IMPORTED_MODULE_6__
        },
        {
            name: 'KLIA 2 (Arrival Hall)',
            time: '8am - 11pm',
            location: 'L2-58 & 59, Level 2 (CP4)',
            img: _assets_klia2_webp__WEBPACK_IMPORTED_MODULE_7__
        },
        {
            name: 'KLIA 2 (Departure Hall)',
            time: '4:30am - 8:30pm',
            location: 'Lot L3-41-46, Level 3',
            img: _assets_klia2_webp__WEBPACK_IMPORTED_MODULE_7__
        },
        {
            name: 'Puchong',
            time: '7:30am - 9:30pm',
            location: '69 & 71, Jalan Puteri 2/3, Bandar Puteri',
            img: _assets_puchong_jpg__WEBPACK_IMPORTED_MODULE_8__
        }

    ];

    const johorArea = [
        {
            name: 'Mid Valley JB',
            time: '9am - 10pm',
            location: 'LG-054, Lower Ground Floor',
            img: _assets_mid_valley_jb_jpg__WEBPACK_IMPORTED_MODULE_9__
        },
        {
            name: 'JB City Square',
            time: '9am - 10pm',
            location: 'Lot MB-07, Level B1, JB City',
            img: _assets_jb_city_square_jpg__WEBPACK_IMPORTED_MODULE_10__
        },
        {
            name: 'AEON Tebrau City',
            time: '10am - 10pm',
            location: 'G117, Ground Floor',
            img: _assets_aeon_tebrau_city_jpg__WEBPACK_IMPORTED_MODULE_11__
        },
        {
            name: 'Johor Jaya JB',
            time: '7:30am - 8:30pm',
            location: '30 & 32, Jalan Dedap 22, Tmn Johor Jaya',
            img: _assets_johor_jaya_jb_jpeg__WEBPACK_IMPORTED_MODULE_12__
        }
    ]

    return {
        kualaLumpurSelangor,
        johorArea
    }

}

/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ productPage)
/* harmony export */ });
/* harmony import */ var _assets_products_header_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/products_header.jpg */ "./src/assets/products_header.jpg");
/* harmony import */ var _assets_classic_white_coffee_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/classic-white-coffee.jpg */ "./src/assets/classic-white-coffee.jpg");
/* harmony import */ var _assets_roasted_white_coffee_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/roasted-white-coffee.jpg */ "./src/assets/roasted-white-coffee.jpg");
/* harmony import */ var _assets_no_sugar_added_white_coffee_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/no-sugar-added-white-coffee.jpg */ "./src/assets/no-sugar-added-white-coffee.jpg");
/* harmony import */ var _assets_mocha_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/mocha.jpg */ "./src/assets/mocha.jpg");
/* harmony import */ var _assets_teh_tarik_product_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/teh-tarik-product.jpg */ "./src/assets/teh-tarik-product.jpg");
/* harmony import */ var _assets_drip_coffee_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/drip-coffee.jpg */ "./src/assets/drip-coffee.jpg");
/* harmony import */ var _assets_traditional_kaya_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/traditional-kaya.jpg */ "./src/assets/traditional-kaya.jpg");
/* harmony import */ var _assets_pandan_kaya_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/pandan-kaya.jpg */ "./src/assets/pandan-kaya.jpg");
/* harmony import */ var _assets_crunchy_peanut_butter_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/crunchy-peanut-butter.jpg */ "./src/assets/crunchy-peanut-butter.jpg");
/* harmony import */ var _assets_creamy_peanut_butter_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/creamy-peanut-butter.jpg */ "./src/assets/creamy-peanut-butter.jpg");
/* harmony import */ var _assets_original_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/original-pan-mee.jpg */ "./src/assets/original-pan-mee.jpg");
/* harmony import */ var _assets_spicy_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/spicy-pan-mee.jpg */ "./src/assets/spicy-pan-mee.jpg");
/* harmony import */ var _assets_mala_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/mala-pan-mee.jpg */ "./src/assets/mala-pan-mee.jpg");
/* harmony import */ var _assets_soup_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/soup-pan-mee.jpg */ "./src/assets/soup-pan-mee.jpg");
/* harmony import */ var _assets_classic_pineapple_tart_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/classic-pineapple-tart.jpg */ "./src/assets/classic-pineapple-tart.jpg");
/* harmony import */ var _assets_cheese_pineapple_tart_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/cheese-pineapple-tart.jpg */ "./src/assets/cheese-pineapple-tart.jpg");
/* harmony import */ var _assets_sambal_rojak_product_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/sambal-rojak-product.jpg */ "./src/assets/sambal-rojak-product.jpg");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
// Products page
























function productPage() {

    // Header image
    const productHeaderDiv = document.createElement('div');
    productHeaderDiv.id = 'productHeader';
    productHeaderDiv.className = 'headerImg';

    const productHeaderImg = document.createElement('img');
    productHeaderImg.src = _assets_products_header_jpg__WEBPACK_IMPORTED_MODULE_0__;

    productHeaderDiv.append(productHeaderImg);
    _index_js__WEBPACK_IMPORTED_MODULE_19__.mainContainer.append(productHeaderDiv);

    // Product title
    const productTitle = (0,_menu_js__WEBPACK_IMPORTED_MODULE_18__.orientalTitle)('productSection', 'All Products');

    productTitle.append(products());

    _index_js__WEBPACK_IMPORTED_MODULE_19__.mainContainer.append(productTitle);

    (0,_footer__WEBPACK_IMPORTED_MODULE_21__["default"])();

}

function products() {

    // All products object
    const allProducts = productObject();

    // Store product imgs
    const productImgs = [];
    
    for(let idx in allProducts) {
        productImgs.push(allProducts[idx].img);
    }

    // Allocate each image into its own div.
    const productItems = (0,_home__WEBPACK_IMPORTED_MODULE_20__.linkImgs)(allProducts.length, productImgs, allProducts.length, 'productItem', 'productItems');

    const productContainer = document.createElement('div');
    productContainer.id = 'productContainer';

    for(let i=0; i<productItems.length; i++) {

        // Add overlay for each product to display product name.
        const productNameDiv = document.createElement('div');
        productNameDiv.className = 'productName';
        productNameDiv.innerHTML = `${allProducts[i].name}<br>${allProducts[i].price}`;

        // Event listener for mouse over.

        productItems[i].addEventListener('mouseover', (e) => {
            productItems[i].insertAdjacentElement('afterbegin', productNameDiv);
            
            if(e.target.className == 'productName') {
                e.target.className = 'productName fade-in';
            }

        })

        productItems[i].addEventListener('mouseout', (e) => {
            if(e.target.className == 'productName fade-in') {
                e.target.className = 'productName';
            }
        })

        productContainer.append(productItems[i]);

    }

    return productContainer;

}

function productObject() {

    return [
        {
            name: 'Classic White Coffee',
            img: _assets_classic_white_coffee_jpg__WEBPACK_IMPORTED_MODULE_1__,
            price: 'RM18.90'
        },
        {
            name: 'Roasted White Coffee',
            img: _assets_roasted_white_coffee_jpg__WEBPACK_IMPORTED_MODULE_2__,
            price: 'RM21.90'
        },
        {
            name: 'No Sugar Added White Coffee',
            img: _assets_no_sugar_added_white_coffee_jpg__WEBPACK_IMPORTED_MODULE_3__,
            price: 'RM21.90'
        },
        {
            name: 'Mocha',
            img: _assets_mocha_jpg__WEBPACK_IMPORTED_MODULE_4__,
            price: 'RM23.90'
        },
        {
            name: 'Teh Tarik',
            img: _assets_teh_tarik_product_jpg__WEBPACK_IMPORTED_MODULE_5__,
            price: 'RM18.90'
        },
        {
            name: 'Drip Coffee',
            img: _assets_drip_coffee_jpg__WEBPACK_IMPORTED_MODULE_6__,
            price: 'RM28.90'
        },
        {
            name: 'Traditional Kaya',
            img: _assets_traditional_kaya_jpg__WEBPACK_IMPORTED_MODULE_7__,
            price: 'RM8.90'
        },
        {
            name: 'Pandan Kaya',
            img: _assets_pandan_kaya_jpg__WEBPACK_IMPORTED_MODULE_8__,
            price: 'RM8.90'
        },
        {
            name: 'Crunchy Peanut Butter',
            img: _assets_crunchy_peanut_butter_jpg__WEBPACK_IMPORTED_MODULE_9__,
            price: 'RM14.90'
        },
        {
            name: 'Creamy Peanut Butter',
            img: _assets_creamy_peanut_butter_jpg__WEBPACK_IMPORTED_MODULE_10__,
            price: 'RM14.90'
        },
        {
            name: 'Original Pan Mee',
            img: _assets_original_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_11__,
            price: 'RM4.90'
        },
        {
            name: 'Spicy Pan Mee',
            img: _assets_spicy_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_12__,
            price: 'RM5.90'
        },
        {
            name: 'Mala Pan Mee',
            img: _assets_mala_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_13__,
            price: 'RM6.90'
        },
        {
            name: 'Soup Pan Mee',
            img: _assets_soup_pan_mee_jpg__WEBPACK_IMPORTED_MODULE_14__,
            price: 'RM5.90'
        },
        {
            name: 'Classic Pineapple Tart',
            img: _assets_classic_pineapple_tart_jpg__WEBPACK_IMPORTED_MODULE_15__,
            price: 'RM39.00'
        },
        {
            name: 'Cheese Pineapple Tart',
            img: _assets_cheese_pineapple_tart_jpg__WEBPACK_IMPORTED_MODULE_16__,
            price: 'RM46.00'
        },
        {
            name: 'Sambal Rojak',
            img: _assets_sambal_rojak_product_jpg__WEBPACK_IMPORTED_MODULE_17__,
            price: 'RM13.90'
        }

    ];

}


/***/ }),

/***/ "./src/assets/klia2.webp":
/*!*******************************!*\
  !*** ./src/assets/klia2.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "klia2.webp";

/***/ }),

/***/ "./src/assets/oriental_1.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_1.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_1.webp";

/***/ }),

/***/ "./src/assets/oriental_2.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_2.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_2.webp";

/***/ }),

/***/ "./src/assets/oriental_3.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_3.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_3.webp";

/***/ }),

/***/ "./src/assets/oriental_4.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_4.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_4.webp";

/***/ }),

/***/ "./src/assets/oriental_5.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_5.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_5.webp";

/***/ }),

/***/ "./src/assets/aeon_tebrau_city.jpg":
/*!*****************************************!*\
  !*** ./src/assets/aeon_tebrau_city.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aeon_tebrau_city.jpg";

/***/ }),

/***/ "./src/assets/branch.jpg":
/*!*******************************!*\
  !*** ./src/assets/branch.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "branch.jpg";

/***/ }),

/***/ "./src/assets/bun_pic.jpg":
/*!********************************!*\
  !*** ./src/assets/bun_pic.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bun_pic.jpg";

/***/ }),

/***/ "./src/assets/bun_word.png":
/*!*********************************!*\
  !*** ./src/assets/bun_word.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bun_word.png";

/***/ }),

/***/ "./src/assets/bun_word_2.png":
/*!***********************************!*\
  !*** ./src/assets/bun_word_2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bun_word_2.png";

/***/ }),

/***/ "./src/assets/cendol.jpg":
/*!*******************************!*\
  !*** ./src/assets/cendol.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cendol.jpg";

/***/ }),

/***/ "./src/assets/char-kuey-teow.jpg":
/*!***************************************!*\
  !*** ./src/assets/char-kuey-teow.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "char-kuey-teow.jpg";

/***/ }),

/***/ "./src/assets/cheese-pineapple-tart.jpg":
/*!**********************************************!*\
  !*** ./src/assets/cheese-pineapple-tart.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cheese-pineapple-tart.jpg";

/***/ }),

/***/ "./src/assets/chicken-hor-fun.jpg":
/*!****************************************!*\
  !*** ./src/assets/chicken-hor-fun.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chicken-hor-fun.jpg";

/***/ }),

/***/ "./src/assets/classic-pineapple-tart.jpg":
/*!***********************************************!*\
  !*** ./src/assets/classic-pineapple-tart.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "classic-pineapple-tart.jpg";

/***/ }),

/***/ "./src/assets/classic-white-coffee.jpg":
/*!*********************************************!*\
  !*** ./src/assets/classic-white-coffee.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "classic-white-coffee.jpg";

/***/ }),

/***/ "./src/assets/coffee_pic.jpg":
/*!***********************************!*\
  !*** ./src/assets/coffee_pic.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee_pic.jpg";

/***/ }),

/***/ "./src/assets/coffee_pic_word.png":
/*!****************************************!*\
  !*** ./src/assets/coffee_pic_word.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee_pic_word.png";

/***/ }),

/***/ "./src/assets/coffee_pic_word_2.png":
/*!******************************************!*\
  !*** ./src/assets/coffee_pic_word_2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee_pic_word_2.png";

/***/ }),

/***/ "./src/assets/creamy-peanut-butter.jpg":
/*!*********************************************!*\
  !*** ./src/assets/creamy-peanut-butter.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "creamy-peanut-butter.jpg";

/***/ }),

/***/ "./src/assets/crunchy-peanut-butter.jpg":
/*!**********************************************!*\
  !*** ./src/assets/crunchy-peanut-butter.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "crunchy-peanut-butter.jpg";

/***/ }),

/***/ "./src/assets/curry-laksa-mee.jpg":
/*!****************************************!*\
  !*** ./src/assets/curry-laksa-mee.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "curry-laksa-mee.jpg";

/***/ }),

/***/ "./src/assets/double-butter-kaya-toast.jpg":
/*!*************************************************!*\
  !*** ./src/assets/double-butter-kaya-toast.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "double-butter-kaya-toast.jpg";

/***/ }),

/***/ "./src/assets/drip-coffee.jpg":
/*!************************************!*\
  !*** ./src/assets/drip-coffee.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "drip-coffee.jpg";

/***/ }),

/***/ "./src/assets/egg_tart.jpg":
/*!*********************************!*\
  !*** ./src/assets/egg_tart.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "egg_tart.jpg";

/***/ }),

/***/ "./src/assets/egg_tart_word.png":
/*!**************************************!*\
  !*** ./src/assets/egg_tart_word.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "egg_tart_word.png";

/***/ }),

/***/ "./src/assets/egg_tart_word_2.png":
/*!****************************************!*\
  !*** ./src/assets/egg_tart_word_2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "egg_tart_word_2.png";

/***/ }),

/***/ "./src/assets/footer-logo.png":
/*!************************************!*\
  !*** ./src/assets/footer-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "footer-logo.png";

/***/ }),

/***/ "./src/assets/github-mark-white.svg":
/*!******************************************!*\
  !*** ./src/assets/github-mark-white.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-mark-white.svg";

/***/ }),

/***/ "./src/assets/hainanese-chicken-rice.jpg":
/*!***********************************************!*\
  !*** ./src/assets/hainanese-chicken-rice.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hainanese-chicken-rice.jpg";

/***/ }),

/***/ "./src/assets/handmadeBreadImg.png":
/*!*****************************************!*\
  !*** ./src/assets/handmadeBreadImg.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "handmadeBreadImg.png";

/***/ }),

/***/ "./src/assets/headerImg1.jpg":
/*!***********************************!*\
  !*** ./src/assets/headerImg1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "headerImg1.jpg";

/***/ }),

/***/ "./src/assets/heading-flower.png":
/*!***************************************!*\
  !*** ./src/assets/heading-flower.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "heading-flower.png";

/***/ }),

/***/ "./src/assets/huayangClassicHeader.png":
/*!*********************************************!*\
  !*** ./src/assets/huayangClassicHeader.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "huayangClassicHeader.png";

/***/ }),

/***/ "./src/assets/jb_city_square.jpg":
/*!***************************************!*\
  !*** ./src/assets/jb_city_square.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "jb_city_square.jpg";

/***/ }),

/***/ "./src/assets/johor_jaya_jb.jpeg":
/*!***************************************!*\
  !*** ./src/assets/johor_jaya_jb.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "johor_jaya_jb.jpeg";

/***/ }),

/***/ "./src/assets/klcc.jpg":
/*!*****************************!*\
  !*** ./src/assets/klcc.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "klcc.jpg";

/***/ }),

/***/ "./src/assets/mala-pan-mee.jpg":
/*!*************************************!*\
  !*** ./src/assets/mala-pan-mee.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mala-pan-mee.jpg";

/***/ }),

/***/ "./src/assets/malay-fried-rice.jpg":
/*!*****************************************!*\
  !*** ./src/assets/malay-fried-rice.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "malay-fried-rice.jpg";

/***/ }),

/***/ "./src/assets/malay-rendang-chicken.jpg":
/*!**********************************************!*\
  !*** ./src/assets/malay-rendang-chicken.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "malay-rendang-chicken.jpg";

/***/ }),

/***/ "./src/assets/mee-siam.jpg":
/*!*********************************!*\
  !*** ./src/assets/mee-siam.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mee-siam.jpg";

/***/ }),

/***/ "./src/assets/mid_valley_jb.jpg":
/*!**************************************!*\
  !*** ./src/assets/mid_valley_jb.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mid_valley_jb.jpg";

/***/ }),

/***/ "./src/assets/mid_valley_megamall.jpg":
/*!********************************************!*\
  !*** ./src/assets/mid_valley_megamall.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mid_valley_megamall.jpg";

/***/ }),

/***/ "./src/assets/mocha.jpg":
/*!******************************!*\
  !*** ./src/assets/mocha.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mocha.jpg";

/***/ }),

/***/ "./src/assets/nanyang-curry.jpg":
/*!**************************************!*\
  !*** ./src/assets/nanyang-curry.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nanyang-curry.jpg";

/***/ }),

/***/ "./src/assets/nasi-lemak.jpg":
/*!***********************************!*\
  !*** ./src/assets/nasi-lemak.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nasi-lemak.jpg";

/***/ }),

/***/ "./src/assets/no-sugar-added-white-coffee.jpg":
/*!****************************************************!*\
  !*** ./src/assets/no-sugar-added-white-coffee.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "no-sugar-added-white-coffee.jpg";

/***/ }),

/***/ "./src/assets/oriental-kopi.jpg":
/*!**************************************!*\
  !*** ./src/assets/oriental-kopi.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental-kopi.jpg";

/***/ }),

/***/ "./src/assets/oriental_picture.jpg":
/*!*****************************************!*\
  !*** ./src/assets/oriental_picture.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_picture.jpg";

/***/ }),

/***/ "./src/assets/original-pan-mee.jpg":
/*!*****************************************!*\
  !*** ./src/assets/original-pan-mee.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "original-pan-mee.jpg";

/***/ }),

/***/ "./src/assets/owner_1.jpg":
/*!********************************!*\
  !*** ./src/assets/owner_1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "owner_1.jpg";

/***/ }),

/***/ "./src/assets/owner_2.jpg":
/*!********************************!*\
  !*** ./src/assets/owner_2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "owner_2.jpg";

/***/ }),

/***/ "./src/assets/pandan-kaya.jpg":
/*!************************************!*\
  !*** ./src/assets/pandan-kaya.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pandan-kaya.jpg";

/***/ }),

/***/ "./src/assets/pavillion_bukit_jalil.jpg":
/*!**********************************************!*\
  !*** ./src/assets/pavillion_bukit_jalil.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pavillion_bukit_jalil.jpg";

/***/ }),

/***/ "./src/assets/pavillion_kl.jpg":
/*!*************************************!*\
  !*** ./src/assets/pavillion_kl.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pavillion_kl.jpg";

/***/ }),

/***/ "./src/assets/polo-bun.jpg":
/*!*********************************!*\
  !*** ./src/assets/polo-bun.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "polo-bun.jpg";

/***/ }),

/***/ "./src/assets/prawn-fried-rice.jpg":
/*!*****************************************!*\
  !*** ./src/assets/prawn-fried-rice.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "prawn-fried-rice.jpg";

/***/ }),

/***/ "./src/assets/products_header.jpg":
/*!****************************************!*\
  !*** ./src/assets/products_header.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "products_header.jpg";

/***/ }),

/***/ "./src/assets/puchong.jpg":
/*!********************************!*\
  !*** ./src/assets/puchong.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "puchong.jpg";

/***/ }),

/***/ "./src/assets/randomHeaderImg3.jpg":
/*!*****************************************!*\
  !*** ./src/assets/randomHeaderImg3.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "randomHeaderImg3.jpg";

/***/ }),

/***/ "./src/assets/randomHeaderImgTwo.jpg":
/*!*******************************************!*\
  !*** ./src/assets/randomHeaderImgTwo.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "randomHeaderImgTwo.jpg";

/***/ }),

/***/ "./src/assets/roasted-white-coffee.jpg":
/*!*********************************************!*\
  !*** ./src/assets/roasted-white-coffee.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "roasted-white-coffee.jpg";

/***/ }),

/***/ "./src/assets/rojak.jpg":
/*!******************************!*\
  !*** ./src/assets/rojak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rojak.jpg";

/***/ }),

/***/ "./src/assets/sambal-rojak-product.jpg":
/*!*********************************************!*\
  !*** ./src/assets/sambal-rojak-product.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sambal-rojak-product.jpg";

/***/ }),

/***/ "./src/assets/sambal-rojak.jpg":
/*!*************************************!*\
  !*** ./src/assets/sambal-rojak.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sambal-rojak.jpg";

/***/ }),

/***/ "./src/assets/signature-egg-tart.jpg":
/*!*******************************************!*\
  !*** ./src/assets/signature-egg-tart.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "signature-egg-tart.jpg";

/***/ }),

/***/ "./src/assets/soup-pan-mee.jpg":
/*!*************************************!*\
  !*** ./src/assets/soup-pan-mee.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "soup-pan-mee.jpg";

/***/ }),

/***/ "./src/assets/spicy-pan-mee.jpg":
/*!**************************************!*\
  !*** ./src/assets/spicy-pan-mee.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "spicy-pan-mee.jpg";

/***/ }),

/***/ "./src/assets/sunway_pyramid.jpg":
/*!***************************************!*\
  !*** ./src/assets/sunway_pyramid.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sunway_pyramid.jpg";

/***/ }),

/***/ "./src/assets/teh-tarik-product.jpg":
/*!******************************************!*\
  !*** ./src/assets/teh-tarik-product.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "teh-tarik-product.jpg";

/***/ }),

/***/ "./src/assets/teh-tarik.jpg":
/*!**********************************!*\
  !*** ./src/assets/teh-tarik.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "teh-tarik.jpg";

/***/ }),

/***/ "./src/assets/traditional-kaya.jpg":
/*!*****************************************!*\
  !*** ./src/assets/traditional-kaya.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "traditional-kaya.jpg";

/***/ }),

/***/ "./src/assets/trx_kl.jpg":
/*!*******************************!*\
  !*** ./src/assets/trx_kl.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "trx_kl.jpg";

/***/ }),

/***/ "./src/assets/wordSectionHeader.png":
/*!******************************************!*\
  !*** ./src/assets/wordSectionHeader.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wordSectionHeader.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map