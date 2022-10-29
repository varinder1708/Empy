
const express = require('express')
 
const path = require('path')

 
const app = express();
const  fs = require("fs");
 
// app.get('*', function (req, res) {
//     res.send("aaaaaaaaaa");
 
// })
function handleRender(req, res) {
    //  const reactHtml = ReactDOMServer.renderToString(<App/>);
    const reactHtml ="aaaaaaaaaaaaaaaaaaaaaa";
      const htmlTemplate = `<!DOCTYPE html>
  <html>
      <head>
          <title>Universal React server bundle</title>
          
          </head>
      <body>
          <div id="app">${reactHtml}</div>
          <script src="/bundle.js"></script>
      </body>
  </html>`;
      res.send(htmlTemplate);
  }

  
app.use(express.static(path.join(__dirname + "/public")))

app.get('/html/basic', function (req, res) {
    handleRender(req,res)
    //res.sendFile((path.join(__dirname+'/public/index.html')))
});
app.get('/html', function (req, res) {
    handleRender(req,res)
    //res.sendFile((path.join(__dirname+'/public/index.html')))
});
app.get('/:cat', function (req, res) {
    res.sendFile((path.join(__dirname+'/public/index.html')))
});


app.get('/:cat/:subcategory', function (req, res) {
    handleRender(req,res)
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
const PORT = process.env.PORT || 3000
 

 
app.listen(PORT)

