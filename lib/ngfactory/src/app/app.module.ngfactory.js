/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core");
var import1 = require("../../../app/app.module");
var import2 = require("@angular/common");
var import3 = require("@angular/platform-browser");
var import4 = require("./app.component.ngfactory");
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [import4.AppComponentNgFactory], [import4.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_11", {
        get: function () {
            if ((this.__LOCALE_ID_11 == null)) {
                (this.__LOCALE_ID_11 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_12", {
        get: function () {
            if ((this.__NgLocalization_12 == null)) {
                (this.__NgLocalization_12 = new import2.NgLocaleLocalization(this._LOCALE_ID_11));
            }
            return this.__NgLocalization_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_13", {
        get: function () {
            if ((this.__Compiler_13 == null)) {
                (this.__Compiler_13 = new import0.Compiler());
            }
            return this.__Compiler_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_14", {
        get: function () {
            if ((this.__IterableDiffers_14 == null)) {
                (this.__IterableDiffers_14 = import0.ɵl());
            }
            return this.__IterableDiffers_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_15", {
        get: function () {
            if ((this.__KeyValueDiffers_15 == null)) {
                (this.__KeyValueDiffers_15 = import0.ɵm());
            }
            return this.__KeyValueDiffers_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_16", {
        get: function () {
            if ((this.__DomSanitizer_16 == null)) {
                (this.__DomSanitizer_16 = new import3.ɵe(this.parent.get(import3.DOCUMENT)));
            }
            return this.__DomSanitizer_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_17", {
        get: function () {
            if ((this.__Sanitizer_17 == null)) {
                (this.__Sanitizer_17 = this._DomSanitizer_16);
            }
            return this.__Sanitizer_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_18", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_18 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_18 = new import3.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_19", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_19 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_19 = [
                    new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT), this._HAMMER_GESTURE_CONFIG_18)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_20", {
        get: function () {
            if ((this.__EventManager_20 == null)) {
                (this.__EventManager_20 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_19, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_21", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_21 == null)) {
                (this.__ɵDomSharedStylesHost_21 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_22", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_22 == null)) {
                (this.__ɵDomRendererFactory2_22 = new import3.ɵDomRendererFactory2(this._EventManager_20, this._ɵDomSharedStylesHost_21));
            }
            return this.__ɵDomRendererFactory2_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_23", {
        get: function () {
            if ((this.__RendererFactory2_23 == null)) {
                (this.__RendererFactory2_23 = this._ɵDomRendererFactory2_22);
            }
            return this.__RendererFactory2_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_24", {
        get: function () {
            if ((this.__ɵSharedStylesHost_24 == null)) {
                (this.__ɵSharedStylesHost_24 = this._ɵDomSharedStylesHost_21);
            }
            return this.__ɵSharedStylesHost_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_25", {
        get: function () {
            if ((this.__Testability_25 == null)) {
                (this.__Testability_25 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_26", {
        get: function () {
            if ((this.__Meta_26 == null)) {
                (this.__Meta_26 = new import3.Meta(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Meta_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_27", {
        get: function () {
            if ((this.__Title_27 == null)) {
                (this.__Title_27 = new import3.Title(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Title_27;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ErrorHandler_1 = import3.ɵa();
        this._APP_ID_2 = 'universal-demo-app';
        this._ɵTRANSITION_ID_3 = this._APP_ID_2;
        this._APP_INITIALIZER_4 = [
            import0.ɵo,
            import3.ɵc(this.parent.get(import3.NgProbeToken, null), this.parent.get(import0.NgProbeToken, null)),
            import3.ɵf(this._ɵTRANSITION_ID_3, this.parent.get(import3.DOCUMENT))
        ];
        this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
        this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
        this._ApplicationRef_7 = this._ɵf_6;
        this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
        this._BrowserModule_9 = new import3.BrowserModule(this.parent.get(import3.BrowserModule, null));
        this._AppModule_10 = new import1.AppModule();
        return this._AppModule_10;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_1;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_2;
        }
        if ((token === import3.ɵTRANSITION_ID)) {
            return this._ɵTRANSITION_ID_3;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_4;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_5;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_6;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_7;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_8;
        }
        if ((token === import3.BrowserModule)) {
            return this._BrowserModule_9;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_10;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_11;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_12;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_13;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_14;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_15;
        }
        if ((token === import3.DomSanitizer)) {
            return this._DomSanitizer_16;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_17;
        }
        if ((token === import3.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_18;
        }
        if ((token === import3.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_19;
        }
        if ((token === import3.EventManager)) {
            return this._EventManager_20;
        }
        if ((token === import3.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_21;
        }
        if ((token === import3.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_22;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_23;
        }
        if ((token === import3.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_24;
        }
        if ((token === import0.Testability)) {
            return this._Testability_25;
        }
        if ((token === import3.Meta)) {
            return this._Meta_26;
        }
        if ((token === import3.Title)) {
            return this._Title_27;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_6.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_21 && this._ɵDomSharedStylesHost_21.ngOnDestroy());
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);