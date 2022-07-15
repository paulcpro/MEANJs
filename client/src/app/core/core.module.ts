import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import * as fr from '@angular/common/locales/fr';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from '../sliders/components/slider/slider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    SliderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
