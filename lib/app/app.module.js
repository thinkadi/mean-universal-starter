"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [platform_browser_1.BrowserModule.withServerTransition({
                        appId: 'universal-demo-app'
                    })
                ],
                declarations: [
                    app_component_1.AppComponent
                ],
                providers: [],
                bootstrap: [
                    app_component_1.AppComponent
                ]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
