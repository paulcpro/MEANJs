import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NewProjetTileComponent } from './components/new-projet-tile/new-projet-tile.component';
import { ProjetTileListComponent } from './components/projet-tile-list/projet-tile-list.component';
import { SingleProjetTileComponent } from './components/single-projet-tile/single-projet-tile.component';

const routes: Routes = [
  { path: 'create', component: NewProjetTileComponent, canActivate: [AuthGuard] },
  { path: ':id', component: SingleProjetTileComponent, canActivate: [AuthGuard] },
  { path: '', component: ProjetTileListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjetTilesRoutingModule {}
