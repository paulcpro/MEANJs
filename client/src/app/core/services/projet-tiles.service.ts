import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ProjetTile } from '../models/projet-tile.model';

@Injectable({
  providedIn: 'root'
})

export class ProjetTilesService {
  projetTiles$!: Observable<ProjetTile[]>;
  projetTiles: ProjetTile[] = []

  projetTile$!: Observable<ProjetTile>;

    constructor(private http: HttpClient) {}

    getAllProjetTiles(): Observable<ProjetTile[]> {
      return this.http.get<ProjetTile[]>('http://localhost:3000/projettiles');
    }

    getProjetTileById(projetTileId: number = 0): Observable<ProjetTile> {
      return this.http.get<ProjetTile>(`http://localhost:3000/projettiles/${projetTileId}`);
    }

    addProjetTileFromForm(formValue: { title: string, description: string, imageUrl: string, location?: string }) : Observable<ProjetTile>
    {
      return this.getAllProjetTiles().pipe(
        map(projetTiles => [...projetTiles].sort((a: ProjetTile,b: ProjetTile) => a.id - b.id)),
        map(sortedProjetTiles => sortedProjetTiles[sortedProjetTiles.length - 1]),
        map(previousProjetTile => ({
          ...formValue,
          id: previousProjetTile.id + 1,
          snaps: 0,
          createDate: new Date()
        })),
        switchMap(newProjetTile =>
            this.http.post<ProjetTile>(`http://localhost:3000/projettiles/`, newProjetTile)
          )
      );
    }
}

/* CRUD EXAMPLE

    addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

*/