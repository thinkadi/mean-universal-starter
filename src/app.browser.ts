import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppBrowserModule { }