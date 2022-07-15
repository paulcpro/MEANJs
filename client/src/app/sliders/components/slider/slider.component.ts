import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slider } from '../../../core/models/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slider!: Slider;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`slider/${this.slider.id}`);
  }

}
