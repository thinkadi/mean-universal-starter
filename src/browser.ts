import 'zone.js/dist/zone';
import { platformBrowser } from '@angular/platform-browser';
import { AppBrowserModuleNgFactory } from './ngfactory/src/app.browser.ngfactory';
platformBrowser().bootstrapModuleFactory(AppBrowserModuleNgFactory);
