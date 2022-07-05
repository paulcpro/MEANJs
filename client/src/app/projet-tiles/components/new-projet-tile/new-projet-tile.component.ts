import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { ProjetTile } from 'src/app/core/models/projet-tile.model';
import { ProjetTilesService } from 'src/app/core/services/projet-tiles.service';

@Component({
  selector: 'app-new-projet-tile',
  templateUrl: './new-projet-tile.component.html',
  styleUrls: ['./new-projet-tile.component.scss']
})
export class NewProjetTileComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<ProjetTile>;
  pattern!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private service: ProjetTilesService) { }

  ngOnInit(): void {
    this.pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.pattern)]],
      location: [null]
    }, {
      updateOn: 'blur'
    })

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createDate: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmitForm() {
    console.log(this.snapForm.value);
    this.service.addFaceSnapFromForm(this.snapForm.value).pipe(
      tap(() => this.route.navigateByUrl('/facesnaps'))
      ).subscribe();
}

}
