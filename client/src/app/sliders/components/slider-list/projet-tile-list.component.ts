import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/core/models/slider.model';
import { SliderService } from 'src/app/core/services/slider.service';

@Component({
  selector: 'app-projet-tile-list',
  templateUrl: './projet-tile-list.component.html',
  styleUrls: ['./projet-tile-list.component.scss']
})
export class ProjetTileListComponent implements OnInit {
  sliders$!: Observable<Slider[]>;

  constructor(private slidersService: SliderService) { }

  ngOnInit(): void {
    this.sliders$ = this.slidersService.getAllFaceSnaps();
  }

}
