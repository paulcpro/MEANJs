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

  projetForm!: FormGroup;
  projetTilePreview$!: Observable<Profile>;
  pattern!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private service: ProfileService) { }

  ngOnInit(): void {
    this.pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.projetForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.pattern)]],
      location: [null]
    }, {
      updateOn: 'blur'
    })

    this.projetTilePreview$ = this.projetForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0
      }))
    );
  }

  onSubmitForm()
  {
    console.log(this.projetForm.value);
    this.service.addFaceSnapFromForm(this.projetForm.value).pipe(
      tap(() => this.route.navigateByUrl('/profiles'))
      ).subscribe();
  }


}
