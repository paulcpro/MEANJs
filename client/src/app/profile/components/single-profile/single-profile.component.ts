import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Profile } from 'src/app/core/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.scss']
})
export class SingleProfileComponent implements OnInit {

  buttonText!: string;
  profile$!: Observable<Profile>;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.profile$ = this.profileService.getFaceSnapById(snapId);
  }

}
