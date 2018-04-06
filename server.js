require('zone.js/dist/zone-node');

const { provideModuleMap } = require('./node_modules/@nguniversal/module-map-ngfactory-loader');
const express = require('./node_modules/express');
const ngExpressEngine = require('./node_modules/@nguniversal/express-engine')
  .ngExpressEngine;
const fs = require('fs');

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
  console.time(`GET: ${req.originalUrl}`);
res.render('./dist/index', {
  req: req,
  res: res
});
console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(process.env.PORT || 8080, () => {});

app.get('/*', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.render('./src/index', {
    req: req,
    res: res
  });
  console.timeEnd(`GET: ${req.originalUrl}`);
});
