// Modules
var express = require('express');
var app = express();
var fs = require('fs');
var Mustache = require('mustache');
var ReactDOM = require('react-dom/server');
var main = require('./main');

// Paths
var templatePath = __dirname + '/views/';
var staticAssetPath = __dirname + '/../public';

var indexTemplate = fs.readFileSync(templatePath + 'index.html.mustache', "utf8");

app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(staticAssetPath));

app.get('/', function(request, response) {
  var reactHtml = ReactDOM.renderToString(main.createClockWithCurrentTime());
  response.type('html').send(Mustache.render(indexTemplate, {reactHtml: reactHtml}));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
