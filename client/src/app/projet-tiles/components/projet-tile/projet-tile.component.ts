import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetTile } from 'src/app/core/models/projet-tile.model';

@Component({
  selector: 'app-projet-tile',
  templateUrl: './projet-tile.component.html',
  styleUrls: ['./projet-tile.component.scss']
})
export class ProjetTileComponent implements OnInit {

  @Input() projetTile!: ProjetTile;

  buttonText!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buttonText = "See more";
  }

  onViewProjetTile() {
    this.router.navigateByUrl(`projettile/${this.projetTile.id}`);
  }
}
