import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ProjetTile } from 'src/app/core/models/projet-tile.model';
import { ProjetTilesService } from 'src/app/core/services/projet-tiles.service';

@Component({
  selector: 'app-single-projet-tile',
  templateUrl: './single-projet-tile.component.html',
  styleUrls: ['./single-projet-tile.component.scss']
})
export class SingleProjetTileComponent implements OnInit {

  buttonText!: string;
  projetTile$!: Observable<ProjetTile>;

  constructor(private route: ActivatedRoute,
              private projetTileService: ProjetTilesService) { }

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.projetTile$ = this.projetTileService.getFaceSnapById(snapId);
  }

  onSnap(faceSnapId: number) {
    if(this.buttonText === "Oh Snap!") {
      this.projetTile$ = this.projetTileService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.buttonText = "Oops, unSnap"));
    } else{
      this.projetTile$ = this.projetTileService.snapFaceSnapById(faceSnapId, 'unSnap').pipe(
        tap(() => this.buttonText = "Oh Snap!")
        );
    }

  }
}
