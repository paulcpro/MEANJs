import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Nécessite d'accéder aux routes donc appel de Router
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onAddNewFaceSnap(): void {
    this.route.navigateByUrl('projettiles/create');
  }

}
