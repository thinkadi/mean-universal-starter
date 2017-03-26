//hacky express wrapper thingy.
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require('path');
var platform_server_1 = require("@angular/platform-server");
var templateCache = {};
function ngExpressEngine(setupOptions) {
    return function (filePath, options, callback) {
        if (!templateCache[filePath]) {
            var file = fs.readFileSync(filePath);
            templateCache[filePath] = file.toString();
        }
        platform_server_1.renderModuleFactory(setupOptions.bootstrap[0], {
            document: templateCache[filePath],
            url: options.req.url
        })
            .then(function (string) {
            callback(null, string);
        });
    };
}
exports.ngExpressEngine = ngExpressEngine;
