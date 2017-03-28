import 'zone.js/dist/zone-node';
import * as path from 'path';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import * as express from 'express';

import { AppServerModuleNgFactory } from './ngfactory/src/app.server.ngfactory';

import { ngExpressEngine } from './express-engine';

const app = express();

app.engine('html', ngExpressEngine({
    baseUrl: 'http://localhost:3000',
    bootstrap: [AppServerModuleNgFactory]
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use(express.static(path.join(path.resolve(__dirname), '..', 'dist', 'client'), { index: false }));

app.get('/unitesty', function (req: any, res: any) {
    res.send({
        "result": "unitesty success"
    });
});

app.get(['/', '/home', '/about'], (req, res) => {
    res.render('index', { req });
});

app.listen(3000, () => {
    console.log('listening...')
});