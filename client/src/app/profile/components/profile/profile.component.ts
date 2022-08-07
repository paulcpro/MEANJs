import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profile!: Profile;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewProfile() {
    this.router.navigateByUrl(`profile/${this.profile.id}`);
  }

}
