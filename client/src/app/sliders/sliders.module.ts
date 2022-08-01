import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewSliderComponent } from './components/new-slider/new-slider.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderListComponent } from './components/slider-list/slider-list.component';
import { SingleSliderComponent } from './components/single-slider/single-projet-tile.component';
import { SlidersRoutingModule } from './sliders-routing.module';

@NgModule({
  declarations: [
    SingleSliderComponent,
    NewSliderComponent,
    SliderListComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    SlidersRoutingModule,
    ReactiveFormsModule
  ],
  exports : [
    SingleSliderComponent,
    NewSliderComponent,
    SliderListComponent,
    SliderComponent
  ]
})

export class SlidersModule { }
