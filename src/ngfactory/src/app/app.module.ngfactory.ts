/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../app/app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from './app.component.ngfactory';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _APP_ID_2:any;
  _ɵTRANSITION_ID_3:any;
  _APP_INITIALIZER_4:any[];
  _ApplicationInitStatus_5:import0.ApplicationInitStatus;
  _ɵf_6:import0.ɵf;
  _ApplicationRef_7:any;
  _ApplicationModule_8:import0.ApplicationModule;
  _BrowserModule_9:import3.BrowserModule;
  _AppModule_10:import1.AppModule;
  __LOCALE_ID_11:any;
  __NgLocalization_12:import2.NgLocaleLocalization;
  __Compiler_13:import0.Compiler;
  __IterableDiffers_14:any;
  __KeyValueDiffers_15:any;
  __DomSanitizer_16:import3.ɵe;
  __Sanitizer_17:any;
  __HAMMER_GESTURE_CONFIG_18:import3.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_19:any[];
  __EventManager_20:import3.EventManager;
  __ɵDomSharedStylesHost_21:import3.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_22:import3.ɵDomRendererFactory2;
  __RendererFactory2_23:any;
  __ɵSharedStylesHost_24:any;
  __Testability_25:import0.Testability;
  __Meta_26:import3.Meta;
  __Title_27:import3.Title;
  constructor(parent:import0.Injector) {
    super(parent,[import4.AppComponentNgFactory],[import4.AppComponentNgFactory]);
  }
  get _LOCALE_ID_11():any {
    if ((this.__LOCALE_ID_11 == null)) { (this.__LOCALE_ID_11 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_11;
  }
  get _NgLocalization_12():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_12 == null)) { (this.__NgLocalization_12 = new import2.NgLocaleLocalization(this._LOCALE_ID_11)); }
    return this.__NgLocalization_12;
  }
  get _Compiler_13():import0.Compiler {
    if ((this.__Compiler_13 == null)) { (this.__Compiler_13 = new import0.Compiler()); }
    return this.__Compiler_13;
  }
  get _IterableDiffers_14():any {
    if ((this.__IterableDiffers_14 == null)) { (this.__IterableDiffers_14 = import0.ɵl()); }
    return this.__IterableDiffers_14;
  }
  get _KeyValueDiffers_15():any {
    if ((this.__KeyValueDiffers_15 == null)) { (this.__KeyValueDiffers_15 = import0.ɵm()); }
    return this.__KeyValueDiffers_15;
  }
  get _DomSanitizer_16():import3.ɵe {
    if ((this.__DomSanitizer_16 == null)) { (this.__DomSanitizer_16 = new import3.ɵe(this.parent.get(import3.DOCUMENT))); }
    return this.__DomSanitizer_16;
  }
  get _Sanitizer_17():any {
    if ((this.__Sanitizer_17 == null)) { (this.__Sanitizer_17 = this._DomSanitizer_16); }
    return this.__Sanitizer_17;
  }
  get _HAMMER_GESTURE_CONFIG_18():import3.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_18 == null)) { (this.__HAMMER_GESTURE_CONFIG_18 = new import3.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_18;
  }
  get _EVENT_MANAGER_PLUGINS_19():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_19 == null)) { (this.__EVENT_MANAGER_PLUGINS_19 = [
      new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT),this._HAMMER_GESTURE_CONFIG_18)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_19;
  }
  get _EventManager_20():import3.EventManager {
    if ((this.__EventManager_20 == null)) { (this.__EventManager_20 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_19,this.parent.get(import0.NgZone))); }
    return this.__EventManager_20;
  }
  get _ɵDomSharedStylesHost_21():import3.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_21 == null)) { (this.__ɵDomSharedStylesHost_21 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_21;
  }
  get _ɵDomRendererFactory2_22():import3.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_22 == null)) { (this.__ɵDomRendererFactory2_22 = new import3.ɵDomRendererFactory2(this._EventManager_20,this._ɵDomSharedStylesHost_21)); }
    return this.__ɵDomRendererFactory2_22;
  }
  get _RendererFactory2_23():any {
    if ((this.__RendererFactory2_23 == null)) { (this.__RendererFactory2_23 = this._ɵDomRendererFactory2_22); }
    return this.__RendererFactory2_23;
  }
  get _ɵSharedStylesHost_24():any {
    if ((this.__ɵSharedStylesHost_24 == null)) { (this.__ɵSharedStylesHost_24 = this._ɵDomSharedStylesHost_21); }
    return this.__ɵSharedStylesHost_24;
  }
  get _Testability_25():import0.Testability {
    if ((this.__Testability_25 == null)) { (this.__Testability_25 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_25;
  }
  get _Meta_26():import3.Meta {
    if ((this.__Meta_26 == null)) { (this.__Meta_26 = new import3.Meta(this.parent.get(import3.DOCUMENT))); }
    return this.__Meta_26;
  }
  get _Title_27():import3.Title {
    if ((this.__Title_27 == null)) { (this.__Title_27 = new import3.Title(this.parent.get(import3.DOCUMENT))); }
    return this.__Title_27;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import3.ɵa();
    this._APP_ID_2 = 'universal-demo-app';
    this._ɵTRANSITION_ID_3 = this._APP_ID_2;
    this._APP_INITIALIZER_4 = [
      import0.ɵo,
      import3.ɵc(this.parent.get(import3.NgProbeToken,(null as any)),this.parent.get(import0.NgProbeToken,(null as any))),
      import3.ɵf(this._ɵTRANSITION_ID_3,this.parent.get(import3.DOCUMENT))
    ]
    ;
    this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
    this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5);
    this._ApplicationRef_7 = this._ɵf_6;
    this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
    this._BrowserModule_9 = new import3.BrowserModule(this.parent.get(import3.BrowserModule,(null as any)));
    this._AppModule_10 = new import1.AppModule();
    return this._AppModule_10;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.APP_ID)) { return this._APP_ID_2; }
    if ((token === import3.ɵTRANSITION_ID)) { return this._ɵTRANSITION_ID_3; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_4; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_5; }
    if ((token === import0.ɵf)) { return this._ɵf_6; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_7; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_8; }
    if ((token === import3.BrowserModule)) { return this._BrowserModule_9; }
    if ((token === import1.AppModule)) { return this._AppModule_10; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_11; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_12; }
    if ((token === import0.Compiler)) { return this._Compiler_13; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_14; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_15; }
    if ((token === import3.DomSanitizer)) { return this._DomSanitizer_16; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_17; }
    if ((token === import3.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_18; }
    if ((token === import3.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_19; }
    if ((token === import3.EventManager)) { return this._EventManager_20; }
    if ((token === import3.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_21; }
    if ((token === import3.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_22; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_23; }
    if ((token === import3.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_24; }
    if ((token === import0.Testability)) { return this._Testability_25; }
    if ((token === import3.Meta)) { return this._Meta_26; }
    if ((token === import3.Title)) { return this._Title_27; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_6.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_21 && this._ɵDomSharedStylesHost_21.ngOnDestroy());
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3RoaW5rYWRpL0RvY3VtZW50cy9yZXBvcy9naXRodWIvdXNlcnMvdGhpbmthZGkvbWVhbi11bml2ZXJzYWwtc3RhcnRlci9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvdGhpbmthZGkvRG9jdW1lbnRzL3JlcG9zL2dpdGh1Yi91c2Vycy90aGlua2FkaS9tZWFuLXVuaXZlcnNhbC1zdGFydGVyL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
