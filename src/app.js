var express = require('express');
var path = require('path');
var app = express();
const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');
const errorConfig = require('./config/error-config.js');

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));

appConfig.init(app, express);
routeConfig.init(app);
errorConfig.init(app);

app.listen(process.env.PORT || 8080);

module.exports = app;
