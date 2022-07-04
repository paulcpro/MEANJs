import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-tile-list',
  templateUrl: './projet-tile-list.component.html',
  styleUrls: ['./projet-tile-list.component.scss']
})
export class ProjetTileListComponent implements OnInit {
  snapActualities!: ProjetTile[];

  constructor(private snapActualityService: ProjetTileService) { }

  ngOnInit(): void {
    this.snapActualities = this.snapActualityService.getAllFaceSnaps();
  }

}
