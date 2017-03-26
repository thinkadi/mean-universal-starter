import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule.withServerTransition({
        appId: 'universal-demo-app'
    })
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }