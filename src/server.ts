import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import * as express from 'express';

import { AppServerModuleNgFactory } from './ngfactory/src/app.server.ngfactory';

import { AppServerModule } from './app.server';
import { ngExpressEngine } from './express-engine';

const app = express();

app.engine('html', ngExpressEngine({
    baseUrl: 'http://localhost:3000',
    bootstrap: [AppServerModuleNgFactory]
}));

app.set('view engine', 'html');
app.set('views', 'src')

app.get('/', (req, res) => {
    res.render('index', { req });
});

app.listen(3000,() => {
	console.log('listening...')
});