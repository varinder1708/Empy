put build in public folder
nodemon index.js

Download heroku installer
cdm prompt->
heroku login
heroku create tonygeneric
git init
git add 
git commit 
go to https://dashboard.heroku.com/apps/tonygeneric/deploy/heroku-git
heroku git:remote -a tonygeneric
heroku git:remote -a generictwo
git push heroku master






Run the app with npm run serve. Open your browser on http://localhost:3030/. 

Run npm run build in the terminal



npm i react react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server

Create .babelrc file
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}


webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};


|-- src
  |-- App.js
  |-- App.scss
  |-- index.html
  |-- index.js


App.js
  import React from "react";
const App = () => {
  return <h1>Hello React</h1>;
};

export default App;



npm i express.js
make server.js and make public folder and put build data in that
Server.js


const express = require('express')
 
const path = require('path')
 
const app = express();
const  fs = require("fs");
 
// app.get('*', function (req, res) {
//     res.send("aaaaaaaaaa");
 
// })
app.use(express.static(path.join(__dirname + "/public")))
app.get('/html', function (req, res) {
    res.sendFile((path.join(__dirname+'/public/index.html')))
});
app.get('/react', function (req, res) {
    res.sendFile((path.join(__dirname+'/public/index.html')))
});
const PORT = process.env.PORT || 3000
 

 
app.listen(PORT)

