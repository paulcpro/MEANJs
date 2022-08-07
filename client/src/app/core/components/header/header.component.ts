import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void { }

  onAddNewProjetTile(): void {
    this.route.navigateByUrl('projettiles/create');
  }

  onAddNewProfile(): void {
    this.route.navigateByUrl('profiles/create');
  }

  onaddNewSlider(): void {
    this.route.navigateByUrl('sliders/create');
  }

}
