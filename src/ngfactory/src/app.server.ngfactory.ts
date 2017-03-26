/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../app.server';
import * as import2 from '@angular/http';
import * as import3 from '@angular/common';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/platform-browser/animations';
import * as import6 from '@angular/platform-server';
import * as import7 from '../../app/app.module';
import * as import8 from '@angular/animations/browser';
import * as import9 from './app/app.component.ngfactory';
class AppServerModuleInjector extends import0.ɵNgModuleInjector<import1.AppServerModule> {
  _HttpModule_0:import2.HttpModule;
  _CommonModule_1:import3.CommonModule;
  _ErrorHandler_2:any;
  _APP_ID_3:any;
  _ɵTRANSITION_ID_4:any;
  _APP_INITIALIZER_5:any[];
  _ApplicationInitStatus_6:import0.ApplicationInitStatus;
  _ɵf_7:import0.ɵf;
  _ApplicationRef_8:any;
  _ApplicationModule_9:import0.ApplicationModule;
  _BrowserModule_10:import4.BrowserModule;
  _NoopAnimationsModule_11:import5.NoopAnimationsModule;
  _ServerModule_12:import6.ServerModule;
  _AppModule_13:import7.AppModule;
  _AppServerModule_14:import1.AppServerModule;
  __BrowserXhr_15:import6.ɵc;
  __ResponseOptions_16:import2.BaseResponseOptions;
  __XSRFStrategy_17:import6.ɵd;
  __XHRBackend_18:import2.XHRBackend;
  __RequestOptions_19:import2.BaseRequestOptions;
  __Http_20:any;
  __LOCALE_ID_21:any;
  __NgLocalization_22:import3.NgLocaleLocalization;
  __Compiler_23:import0.Compiler;
  __IterableDiffers_24:any;
  __KeyValueDiffers_25:any;
  __DomSanitizer_26:import4.ɵe;
  __Sanitizer_27:any;
  __HAMMER_GESTURE_CONFIG_28:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_29:any[];
  __EventManager_30:import4.EventManager;
  __ɵDomSharedStylesHost_31:import4.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_32:import4.ɵDomRendererFactory2;
  __ɵb_33:import6.ɵb;
  __ɵSharedStylesHost_34:any;
  __ɵServerRendererFactory2_35:import6.ɵServerRendererFactory2;
  __ɵAnimationEngine_36:import8.ɵNoopAnimationEngine;
  __RendererFactory2_37:any;
  __Testability_38:any;
  __Meta_39:import4.Meta;
  __Title_40:import4.Title;
  constructor(parent:import0.Injector) {
    super(parent,[import9.AppComponentNgFactory],[import9.AppComponentNgFactory]);
  }
  get _BrowserXhr_15():import6.ɵc {
    if ((this.__BrowserXhr_15 == null)) { (this.__BrowserXhr_15 = new import6.ɵc()); }
    return this.__BrowserXhr_15;
  }
  get _ResponseOptions_16():import2.BaseResponseOptions {
    if ((this.__ResponseOptions_16 == null)) { (this.__ResponseOptions_16 = new import2.BaseResponseOptions()); }
    return this.__ResponseOptions_16;
  }
  get _XSRFStrategy_17():import6.ɵd {
    if ((this.__XSRFStrategy_17 == null)) { (this.__XSRFStrategy_17 = new import6.ɵd()); }
    return this.__XSRFStrategy_17;
  }
  get _XHRBackend_18():import2.XHRBackend {
    if ((this.__XHRBackend_18 == null)) { (this.__XHRBackend_18 = new import2.XHRBackend(this._BrowserXhr_15,this._ResponseOptions_16,this._XSRFStrategy_17)); }
    return this.__XHRBackend_18;
  }
  get _RequestOptions_19():import2.BaseRequestOptions {
    if ((this.__RequestOptions_19 == null)) { (this.__RequestOptions_19 = new import2.BaseRequestOptions()); }
    return this.__RequestOptions_19;
  }
  get _Http_20():any {
    if ((this.__Http_20 == null)) { (this.__Http_20 = import6.ɵe(this._XHRBackend_18,this._RequestOptions_19)); }
    return this.__Http_20;
  }
  get _LOCALE_ID_21():any {
    if ((this.__LOCALE_ID_21 == null)) { (this.__LOCALE_ID_21 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_21;
  }
  get _NgLocalization_22():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_22 == null)) { (this.__NgLocalization_22 = new import3.NgLocaleLocalization(this._LOCALE_ID_21)); }
    return this.__NgLocalization_22;
  }
  get _Compiler_23():import0.Compiler {
    if ((this.__Compiler_23 == null)) { (this.__Compiler_23 = new import0.Compiler()); }
    return this.__Compiler_23;
  }
  get _IterableDiffers_24():any {
    if ((this.__IterableDiffers_24 == null)) { (this.__IterableDiffers_24 = import0.ɵl()); }
    return this.__IterableDiffers_24;
  }
  get _KeyValueDiffers_25():any {
    if ((this.__KeyValueDiffers_25 == null)) { (this.__KeyValueDiffers_25 = import0.ɵm()); }
    return this.__KeyValueDiffers_25;
  }
  get _DomSanitizer_26():import4.ɵe {
    if ((this.__DomSanitizer_26 == null)) { (this.__DomSanitizer_26 = new import4.ɵe(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_26;
  }
  get _Sanitizer_27():any {
    if ((this.__Sanitizer_27 == null)) { (this.__Sanitizer_27 = this._DomSanitizer_26); }
    return this.__Sanitizer_27;
  }
  get _HAMMER_GESTURE_CONFIG_28():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_28 == null)) { (this.__HAMMER_GESTURE_CONFIG_28 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_28;
  }
  get _EVENT_MANAGER_PLUGINS_29():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_29 == null)) { (this.__EVENT_MANAGER_PLUGINS_29 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_28)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_29;
  }
  get _EventManager_30():import4.EventManager {
    if ((this.__EventManager_30 == null)) { (this.__EventManager_30 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_29,this.parent.get(import0.NgZone))); }
    return this.__EventManager_30;
  }
  get _ɵDomSharedStylesHost_31():import4.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_31 == null)) { (this.__ɵDomSharedStylesHost_31 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_31;
  }
  get _ɵDomRendererFactory2_32():import4.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_32 == null)) { (this.__ɵDomRendererFactory2_32 = new import4.ɵDomRendererFactory2(this._EventManager_30,this._ɵDomSharedStylesHost_31)); }
    return this.__ɵDomRendererFactory2_32;
  }
  get _ɵb_33():import6.ɵb {
    if ((this.__ɵb_33 == null)) { (this.__ɵb_33 = new import6.ɵb(this.parent.get(import4.DOCUMENT),this._ɵTRANSITION_ID_4)); }
    return this.__ɵb_33;
  }
  get _ɵSharedStylesHost_34():any {
    if ((this.__ɵSharedStylesHost_34 == null)) { (this.__ɵSharedStylesHost_34 = this._ɵb_33); }
    return this.__ɵSharedStylesHost_34;
  }
  get _ɵServerRendererFactory2_35():import6.ɵServerRendererFactory2 {
    if ((this.__ɵServerRendererFactory2_35 == null)) { (this.__ɵServerRendererFactory2_35 = new import6.ɵServerRendererFactory2(this.parent.get(import0.NgZone),this.parent.get(import4.DOCUMENT),this._ɵSharedStylesHost_34)); }
    return this.__ɵServerRendererFactory2_35;
  }
  get _ɵAnimationEngine_36():import8.ɵNoopAnimationEngine {
    if ((this.__ɵAnimationEngine_36 == null)) { (this.__ɵAnimationEngine_36 = new import8.ɵNoopAnimationEngine()); }
    return this.__ɵAnimationEngine_36;
  }
  get _RendererFactory2_37():any {
    if ((this.__RendererFactory2_37 == null)) { (this.__RendererFactory2_37 = import6.ɵa(this._ɵServerRendererFactory2_35,this._ɵAnimationEngine_36,this.parent.get(import0.NgZone))); }
    return this.__RendererFactory2_37;
  }
  get _Testability_38():any {
    if ((this.__Testability_38 == null)) { (this.__Testability_38 = (null as any)); }
    return this.__Testability_38;
  }
  get _Meta_39():import4.Meta {
    if ((this.__Meta_39 == null)) { (this.__Meta_39 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_39;
  }
  get _Title_40():import4.Title {
    if ((this.__Title_40 == null)) { (this.__Title_40 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_40;
  }
  createInternal():import1.AppServerModule {
    this._HttpModule_0 = new import2.HttpModule();
    this._CommonModule_1 = new import3.CommonModule();
    this._ErrorHandler_2 = import4.ɵa();
    this._APP_ID_3 = 'universal-demo-app';
    this._ɵTRANSITION_ID_4 = this._APP_ID_3;
    this._APP_INITIALIZER_5 = [
      import0.ɵo,
      import4.ɵc(this.parent.get(import4.NgProbeToken,(null as any)),this.parent.get(import0.NgProbeToken,(null as any))),
      import4.ɵf(this._ɵTRANSITION_ID_4,this.parent.get(import4.DOCUMENT))
    ]
    ;
    this._ApplicationInitStatus_6 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_5);
    this._ɵf_7 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_2,this.componentFactoryResolver,this._ApplicationInitStatus_6);
    this._ApplicationRef_8 = this._ɵf_7;
    this._ApplicationModule_9 = new import0.ApplicationModule(this._ApplicationRef_8);
    this._BrowserModule_10 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._NoopAnimationsModule_11 = new import5.NoopAnimationsModule();
    this._ServerModule_12 = new import6.ServerModule();
    this._AppModule_13 = new import7.AppModule();
    this._AppServerModule_14 = new import1.AppServerModule();
    return this._AppServerModule_14;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.HttpModule)) { return this._HttpModule_0; }
    if ((token === import3.CommonModule)) { return this._CommonModule_1; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_2; }
    if ((token === import0.APP_ID)) { return this._APP_ID_3; }
    if ((token === import4.ɵTRANSITION_ID)) { return this._ɵTRANSITION_ID_4; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_5; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_6; }
    if ((token === import0.ɵf)) { return this._ɵf_7; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_8; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_9; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_10; }
    if ((token === import5.NoopAnimationsModule)) { return this._NoopAnimationsModule_11; }
    if ((token === import6.ServerModule)) { return this._ServerModule_12; }
    if ((token === import7.AppModule)) { return this._AppModule_13; }
    if ((token === import1.AppServerModule)) { return this._AppServerModule_14; }
    if ((token === import2.BrowserXhr)) { return this._BrowserXhr_15; }
    if ((token === import2.ResponseOptions)) { return this._ResponseOptions_16; }
    if ((token === import2.XSRFStrategy)) { return this._XSRFStrategy_17; }
    if ((token === import2.XHRBackend)) { return this._XHRBackend_18; }
    if ((token === import2.RequestOptions)) { return this._RequestOptions_19; }
    if ((token === import2.Http)) { return this._Http_20; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_21; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_22; }
    if ((token === import0.Compiler)) { return this._Compiler_23; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_24; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_25; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_26; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_27; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_28; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_29; }
    if ((token === import4.EventManager)) { return this._EventManager_30; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_31; }
    if ((token === import4.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_32; }
    if ((token === import6.ɵb)) { return this._ɵb_33; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_34; }
    if ((token === import6.ɵServerRendererFactory2)) { return this._ɵServerRendererFactory2_35; }
    if ((token === import8.ɵAnimationEngine)) { return this._ɵAnimationEngine_36; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_37; }
    if ((token === import0.Testability)) { return this._Testability_38; }
    if ((token === import4.Meta)) { return this._Meta_39; }
    if ((token === import4.Title)) { return this._Title_40; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_7.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_31 && this._ɵDomSharedStylesHost_31.ngOnDestroy());
  }
}
export const AppServerModuleNgFactory:import0.NgModuleFactory<import1.AppServerModule> = new import0.NgModuleFactory<any>(AppServerModuleInjector,import1.AppServerModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RoaW5rYWRpL0RvY3VtZW50cy9yZXBvcy9naXRodWIvdXNlcnMvdGhpbmthZGkvbWVhbi11bml2ZXJzYWwtc3RhcnRlci9zcmMvYXBwLnNlcnZlci5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy90aGlua2FkaS9Eb2N1bWVudHMvcmVwb3MvZ2l0aHViL3VzZXJzL3RoaW5rYWRpL21lYW4tdW5pdmVyc2FsLXN0YXJ0ZXIvc3JjL2FwcC5zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=