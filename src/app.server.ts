import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

@NgModule({
    imports: [
        ServerModule,
        BrowserModule.withServerTransition({
            appId: environment.appId
        }),
        AppModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppServerModule { }