import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/core/models/slider.model';
import { SliderService } from 'src/app/core/services/slider.service';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent implements OnInit {
  sliders$!: Observable<Slider[]>;

  constructor(private slidersService: SliderService) { }

  ngOnInit(): void {
    this.sliders$ = this.slidersService.getAllFaceSnaps();
  }

}
