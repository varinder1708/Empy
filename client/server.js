//import React from "react";

//import App from "./src/App";
//const App = require('./src/App');
//import { renderToString } from 'react-dom/server'
const express = require("express");
//import { StaticRouter } from "react-router";
// import {StaticRouter} from 'react-router-dom';
//import { StaticRouter } from "react-router-dom/server";
const path = require("path");
const ReactRouter = require("react-router-dom");

const app = express();
const fs = require("fs");

// app.get('*', function (req, res) {
//     res.send("aaaaaaaaaa");

// })
function htmlTemplate(reactDom) {
  return `
        /* ... */
        
        <div id="app">${reactDom}</div>
       
        <script src="./bundle.js"></script>
        
        /* ... */
    `;
}

function handleRender(req, res) {
  //const context = {};
  //  const areactHtml = renderToString(<StaticRouter location={req.url}><App /> </StaticRouter>);
  //const reactHtml = renderToString(<App />);
  //const reactHtml ="aaaaaaaaaaaaaaaaaaaaaa";
  //const reactHtml =renderToString(<StaticRouter context={context} location={req.url}>cccccccccccc </StaticRouter>);
  //<div id="app">${reactHtml}</div>
  const htmlTemplate = `<!DOCTYPE html>
  <html>
      <head>
          <title>Loaded from server</title>
          
          </head>
      <body>
          <div id="app"></div>
        <script src="/bundle.js"></script>
      </body>
  </html>`;
  return res.send(htmlTemplate);
}

app.use(express.static(path.join(__dirname + "/public")));

app.get("/html/basic", function (req, res) {
  handleRender(req, res);
  //res.sendFile((path.join(__dirname+'/public/index.html')))
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

  handleRender(req, res);
  //res.sendFile((path.join(__dirname+'/public/index.html')))
});
app.get("/:cat", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/:cat/:subcategory", function (req, res) {
  handleRender(req, res);
  // console.log("bbbbbbbbbbbb")
  // console.log(req.params.subcategory);
  //  console.log(req.params.cat)
  //  res.sendFile((path.join(__dirname+'/public/index.html')))
});
// app.get('/:cat', function (req, res) {
//     res.sendFile((path.join(__dirname+'/public/index.html')))
// });
// app.get('/react', function (req, res) {
//     res.sendFile((path.join(__dirname+'/public/index.html')))
// });
const PORT = process.env.PORT || 3000;

app.listen(PORT);
