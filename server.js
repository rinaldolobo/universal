require('zone.js/dist/zone-node');

const { provideModuleMap } = require('./node_modules/@nguniversal/module-map-ngfactory-loader');
const express = require('./node_modules/express');
const ngExpressEngine = require('./node_modules/@nguniversal/express-engine')
  .ngExpressEngine;
// const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fabric = require('fabric').fabric;

const app = express();

const {
  ServerAppModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist-server/main.bundle`);

const provider = provideModuleMap(LAZY_MODULE_MAP);

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory,
    providers: [provider]
  })
);

app.set('view engine', 'html');
app.set('views', __dirname);

app.use(express.static(__dirname + '/assets', { index: false }));
app.use(express.static(__dirname + '/dist', { index: false }));

app.get('/*', (req, res) => {
  console.time(req);
  res.render('./dist/index', {
    req: req,
    res: res
  },(err, result) => {
    const dom = new JSDOM(result);
    console.log(dom.window.document.querySelector("html").outerHTML);
    let svgStr = dom.window.document.querySelector("svg").outerHTML;
    let height = dom.window.document.querySelector("svg").getAttribute('height');
    let width = dom.window.document.querySelector("svg").getAttribute('width');
    const canvas = new fabric.createCanvasForNode(height,width);

    fabric.loadSVGFromString(dom.window.document.querySelector("svg").outerHTML, function(objects, options) {
      const obj = new fabric.PathGroup(objects, options);
      canvas.add(obj);
      dom.window.document.querySelector("svg").outerHTML = '<img src="' + canvas.toDataURL() + '" />';
      res.send(dom.window.document.querySelector("html").outerHTML);
    });
  });
});

app.listen(process.env.PORT || 8080, () => {});
// app.get('/*', (req, res) => {
//   console.time(`GET: ${req.originalUrl}`);
//   res.render('./src/index', {
//     req: req,
//     res: res
//   });
//   console.timeEnd(`GET: ${req.originalUrl}`);
// });
