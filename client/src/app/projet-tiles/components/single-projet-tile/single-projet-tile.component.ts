import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-projet-tile',
  templateUrl: './single-projet-tile.component.html',
  styleUrls: ['./single-projet-tile.component.scss']
})
export class SingleProjetTileComponent implements OnInit {

  buttonText!: string;
  projetTile!: ProjetTile;

  constructor(private route: ActivatedRoute,
    private snapActualityService: ProjetTileService) { }

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.projetTile = this.snapActualityService.getFaceSnapById(snapId);
  }

}
