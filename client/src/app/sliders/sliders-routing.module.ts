import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NewSliderComponent } from './components/new-slider/new-slider.component';
import { SingleSliderComponent } from './components/single-slider/single-projet-tile.component';
import { SliderListComponent } from './components/slider-list/slider-list.component';

const routes: Routes = [
  { path: 'create', component: NewSliderComponent, canActivate: [AuthGuard] },
  { path: ':id', component: SingleSliderComponent, canActivate: [AuthGuard] },
  { path: '', component: SliderListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SlidersRoutingModule {}
