import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-tile',
  templateUrl: './projet-tile.component.html',
  styleUrls: ['./projet-tile.component.scss']
})
export class ProjetTileComponent implements OnInit {

  @Input() projetTile!: ProjetTile;

  buttonText!: string;

  constructor(private router: Router,
    private projetTileService: ProjetTileService) { }

  ngOnInit(): void {
    this.buttonText = "Voir plus";
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`projettile/${this.projetTile.id}`);
  }

}
