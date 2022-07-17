import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Profile } from 'src/app/core/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.scss']
})
export class NewProfileComponent implements OnInit {

  profilePreview$!: Observable<Profile>;
  profileForm!: FormGroup;
  pattern!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private service: ProfileService) { }

  ngOnInit(): void {
    this.pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.profileForm = this.formBuilder.group({
      title: [null, Validators.required],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.pattern)]]
    }, {
      updateOn: 'blur'
    })

    this.profilePreview$ = this.profileForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0
      }))
    );
  }

  onSubmitForm()
  {
    console.log(this.profileForm.value);
    this.service.addFaceSnapFromForm(this.profileForm.value).pipe(
      tap(() => this.route.navigateByUrl('/profiles'))
      ).subscribe();
  }


}
