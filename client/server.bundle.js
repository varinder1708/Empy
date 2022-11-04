/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
//import React from "react";
//import App from "./src/App";
//const App = require('./src/App');
//import { renderToString } from 'react-dom/server'
var express = __webpack_require__(/*! express */ "express"); //import { StaticRouter } from "react-router";
// import {StaticRouter} from 'react-router-dom';
//import { StaticRouter } from "react-router-dom/server";


var path = __webpack_require__(/*! path */ "path");

var ReactRouter = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var app = express();

var fs = __webpack_require__(/*! fs */ "fs"); // app.get('*', function (req, res) {
//     res.send("aaaaaaaaaa");
// })


function htmlTemplate(reactDom) {
  return "\n        /* ... */\n        \n        <div id=\"app\">".concat(reactDom, "</div>\n       \n        <script src=\"./bundle.js\"></script>\n        \n        /* ... */\n    ");
}

function handleRender(req, res) {
  //const context = {};
  //  const areactHtml = renderToString(<StaticRouter location={req.url}><App /> </StaticRouter>);
  //const reactHtml = renderToString(<App />);
  //const reactHtml ="aaaaaaaaaaaaaaaaaaaaaa";
  //const reactHtml =renderToString(<StaticRouter context={context} location={req.url}>cccccccccccc </StaticRouter>);
  //<div id="app">${reactHtml}</div>
  var htmlTemplate = "<!DOCTYPE html>\n  <html>\n      <head>\n          <title>Loaded from server</title>\n          \n          </head>\n      <body>\n          <div id=\"app\"></div>\n        <script src=\"/bundle.js\"></script>\n      </body>\n  </html>";
  return res.send(htmlTemplate);
}

app.use(express["static"](path.join(__dirname + "/public")));
app.get("/html/basic", function (req, res) {
  handleRender(req, res); //res.sendFile((path.join(__dirname+'/public/index.html')))
});
app.get("/html", function (req, res) {
  // const context = { };
  // const jsx = (
  //     <StaticRouter context={ context } location={ req.url }>
  //         <App />
  //     </StaticRouter>
  // );
  // const reactDom = renderToString( jsx );
  // res.writeHead( 200, { "Content-Type": "text/html" } );
  // res.end( htmlTemplate( reactDom ) );
  handleRender(req, res); //res.sendFile((path.join(__dirname+'/public/index.html')))
});
app.get("/:cat", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/:cat/:subcategory", function (req, res) {
  handleRender(req, res); // console.log("bbbbbbbbbbbb")
  // console.log(req.params.subcategory);
  //  console.log(req.params.cat)
  //  res.sendFile((path.join(__dirname+'/public/index.html')))
}); // app.get('/:cat', function (req, res) {
//     res.sendFile((path.join(__dirname+'/public/index.html')))
// });
// app.get('/react', function (req, res) {
//     res.sendFile((path.join(__dirname+'/public/index.html')))
// });

var PORT = process.env.PORT || 3000;
app.listen(PORT);
})();

/******/ })()
;
//# sourceMappingURL=server.bundle.js.map