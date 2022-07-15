import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, tap, Observable } from 'rxjs';
import { Slider } from 'src/app/core/models/slider.model';
import { SliderService } from 'src/app/core/services/slider.service';

@Component({
  selector: 'app-new-slider',
  templateUrl: './new-slider.component.html',
  styleUrls: ['./new-slider.component.scss']
})
export class NewSliderComponent implements OnInit {
  sliderForm!: FormGroup;
  sliderPreview$!: Observable<Slider>;
  pattern!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private service: SliderService) { }

  ngOnInit(): void {
    this.pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.sliderForm = this.formBuilder.group({
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.pattern)]]
    }, {
      updateOn: 'blur'
    })

    this.sliderPreview$ = this.sliderForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0
      }))
    );
  }

  onSubmitForm()
  {
    console.log(this.sliderForm.value);
    this.service.addFaceSnapFromForm(this.sliderForm.value).pipe(
      tap(() => this.route.navigateByUrl('/sliders'))
      ).subscribe();
  }
}

