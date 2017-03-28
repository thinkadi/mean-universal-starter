import 'zone.js/dist/zone-node';
import * as path from 'path';
import { enableProdMode } from '@angular/core';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import * as express from 'express';

import { AppServerModuleNgFactory } from './ngfactory/src/app.server.ngfactory';
import { environment } from './environments/environment';
import { ngExpressEngine } from './express-engine';

if (environment.production) {
    // Angular Production Mode
    enableProdMode();
}

const server = express();

server.engine('html', ngExpressEngine({
    bootstrap: [AppServerModuleNgFactory]
}));

server.set('view engine', 'html');
server.set('views', 'src');

server.use(express.static(path.join(path.resolve(__dirname), '..', 'dist', 'client'), { index: false }));

server.get('/unitesty', function (req: any, res: any) {
    res.send({
        "result": "unitesty success"
    });
});

server.get(['/', '/home', '/about'], (req, res) => {
    res.render('index', { req });
});

server.listen(environment.port, () => {
    console.log('Listening on port:' + environment.port);
});