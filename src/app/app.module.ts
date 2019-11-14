import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import {createCustomElement} from '@angular/elements';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Element1Component } from './elements/element1/element1.component';
import { Element2Component } from './elements/element2/element2.component';
import { Element3Component } from './elements/element3/element3.component';
import { Element4Component } from './elements/element4/element4.component';

@NgModule({
  declarations: [
    AppComponent, Element1Component, Element2Component, Element3Component, Element4Component
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent, Element1Component, Element2Component, Element3Component, Element4Component],
  bootstrap: [AppComponent],
})
export class AppModule { 

  constructor(private injector: Injector) {
    const el = createCustomElement(Element1Component, { injector: this.injector });
    customElements.define('my-element1', el);

    const el2 = createCustomElement(Element2Component, { injector: this.injector });
    customElements.define('my-element2', el2);
    
    const el3 = createCustomElement(Element3Component, { injector: this.injector });
    customElements.define('my-element3', el3);
    
    const el4 = createCustomElement(Element4Component, { injector: this.injector });
    customElements.define('my-element4', el4);
  }

  ngDoBootstrap() {

  }
}
