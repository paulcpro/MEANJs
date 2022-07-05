import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetTile } from 'src/app/core/models/projet-tile.model';
import { ProjetTilesService } from 'src/app/core/services/projet-tiles.service';

@Component({
  selector: 'app-projet-tile',
  templateUrl: './projet-tile.component.html',
  styleUrls: ['./projet-tile.component.scss']
})
export class ProjetTileComponent implements OnInit {

  @Input() projetTile!: ProjetTile;

  buttonText!: string;

  constructor(private router: Router,
    private projetTileService: ProjetTilesService) { }

  ngOnInit(): void {
    this.buttonText = "Voir plus";
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`projettile/${this.projetTile.id}`);
  }
}
