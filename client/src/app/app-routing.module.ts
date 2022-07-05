import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page-component/landing-page/landing-page-component.component';

const routes: Routes = [
  { path: 'projettiles', loadChildren: () => import('./projet-tiles/projet-tiles.module').then(m => m.ProjetTilesModule),},
  { path: '', component: LandingPageComponent } //path = chemin vers où on route soit : localhost/facesnaps / component = le component à afficher
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
