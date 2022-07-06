import { NgModule } from '@angular/core';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
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
