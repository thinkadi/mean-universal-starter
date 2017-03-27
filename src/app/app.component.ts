import { Component } from '@angular/core';

declare var module: any;
@Component({
    selector: 'app-root',
    template: '<h1>Universal Demo</h1><a routerLink="/home" routerLinkActive="active">Home</a><a routerLink="/about">About Us</a><router-outlet></router-outlet>'
})
export class AppComponent { }