import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
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
