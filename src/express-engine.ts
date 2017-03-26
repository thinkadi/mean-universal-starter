//hacky express wrapper thingy.

const fs = require('fs');
const path = require('path');
import { renderModuleFactory } from '@angular/platform-server';

const templateCache: any = {};

export function ngExpressEngine(setupOptions: any) {

    return function (filePath: any, options: any, callback: any) {
        if (!templateCache[filePath]) {
            let file = fs.readFileSync(filePath);
            templateCache[filePath] = file.toString();
        }
        renderModuleFactory(setupOptions.bootstrap[0], {
            document: templateCache[filePath],
            url: options.req.url
        })
            .then(string => {
                callback(null, string);
            });
    }
}
