import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetTile } from 'src/app/core/models/projet-tile.model';
import { ProjetTilesService } from 'src/app/core/services/projet-tiles.service';

@Component({
  selector: 'app-projet-tile-list',
  templateUrl: './projet-tile-list.component.html',
  styleUrls: ['./projet-tile-list.component.scss']
})
export class ProjetTileListComponent implements OnInit {
  projetTiles$!: Observable<ProjetTile[]>;

  constructor(private projetTilesService: ProjetTilesService) { }

  ngOnInit(): void {
    this.projetTiles$ = this.projetTilesService.getAllFaceSnaps();
  }

}
