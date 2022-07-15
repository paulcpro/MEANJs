import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  profiles$!: Observable<Profile[]>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profiles$ = this.profileService.getAllFaceSnaps();
  }

}
