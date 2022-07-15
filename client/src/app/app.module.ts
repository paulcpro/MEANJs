import { NgModule } from '@angular/core';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { SliderComponent } from './src/app/core/components/slider/slider.component';
import { NewSliderComponent } from './slider/components/new-slider/new-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NewSliderComponent
    ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    AuthModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
