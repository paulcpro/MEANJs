import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Slider } from '../models/slider.model';

@Injectable({
  providedIn: 'root'
})

export class SliderService {
  projetTiles$!: Observable<Slider[]>;
  projetTiles: Slider[] = []
  projetTile$!: Observable<Slider>;

    constructor(private http: HttpClient) {}

    getAllFaceSnaps(): Observable<Slider[]>
    {
      return this.http.get<Slider[]>('http://localhost:3000/sliders');
    }

    getFaceSnapById(sliderId: number = 0): Observable<Slider>
    {
      return this.http.get<Slider>(`http://localhost:3000/sliders/${sliderId}`);
    }

    addFaceSnapFromForm(formValue: { title: string, description: string, imageUrl: string, location?: string }) : Observable<Slider>
    {
      return this.getAllFaceSnaps().pipe(
        map(Sliders => [...Sliders].sort((a: Slider,b: Slider) => a.id - b.id)),
        map(sortedSlider => sortedSlider[sortedSlider.length - 1]),
        map(previousSlider => ({
          ...formValue,
          id: previousSlider.id + 1
        })),
        switchMap(newSlider =>
            this.http.post<Slider>(`http://localhost:3000/sliders/`, newSlider)
          )
      );
    }

}
