"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_server_ngfactory_1 = require("./ngfactory/src/app.server.ngfactory");
var express_engine_1 = require("./express-engine");
var app = express();
app.engine('html', express_engine_1.ngExpressEngine({
    baseUrl: 'http://localhost:3000',
    bootstrap: [app_server_ngfactory_1.AppServerModuleNgFactory]
}));
app.set('view engine', 'html');
app.set('views', 'src');
app.get('/', function (req, res) {
    res.render('index', { req: req });
});
app.listen(3000, function () {
    console.log('listening...');
});
