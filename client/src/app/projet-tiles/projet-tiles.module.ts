import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewProjetTileComponent } from './components/new-projet-tile/new-projet-tile.component';
import { SingleProjetTileComponent } from './components/single-projet-tile/single-projet-tile.component';
import { ProjetTileListComponent } from './components/projet-tile-list/projet-tile-list.component';
import { ProjetTileComponent } from './components/projet-tile/projet-tile.component';
import { ProjetTilesRoutingModule } from './projet-tiles-routing.module';

@NgModule({
  declarations: [
    SingleProjetTileComponent,
    NewProjetTileComponent,
    ProjetTileListComponent,
    ProjetTileComponent
  ],
  imports: [
    CommonModule,
    ProjetTilesRoutingModule, // Ajoute à la route racine nos routes childs
    ReactiveFormsModule
  ],
  exports : [
    SingleProjetTileComponent,
    NewProjetTileComponent,
    ProjetTileListComponent,
    ProjetTileComponent
  ]
})

export class ProjetTilesModule { }
