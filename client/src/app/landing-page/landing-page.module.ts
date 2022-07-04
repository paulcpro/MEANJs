import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page-component/landing-page/landing-page-component.component';



@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  exports: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LandingPageModule { }
