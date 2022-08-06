import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page-component/landing-page/landing-page-component.component';

const routes: Routes = [
  { path: 'projettiles', loadChildren: () => import('./projet-tiles/projet-tiles.module').then(m => m.ProjetTilesModule),},
  { path: 'profiles', loadChildren: () => import('./profile/profiles.module').then(m => m.ProfilesModule),},
  { path: 'sliders', loadChildren: () => import('./sliders/sliders.module').then(m => m.SlidersModule),},
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
