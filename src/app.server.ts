import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

@NgModule({
    imports: [
        ServerModule,
        BrowserModule.withServerTransition({
            appId: 'mean-universal-starter'
        }),
        AppModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppServerModule { }