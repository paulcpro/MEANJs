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

    getAllFaceSnaps(): Observable<ProjetTile[]> {
      return this.http.get<ProjetTile[]>('http://localhost:3000/projettiles');
    }

    getFaceSnapById(projetTileId: number = 0): Observable<ProjetTile> {
      return this.http.get<ProjetTile>(`http://localhost:3000/projettiles/${projetTileId}`);
    }

    addFaceSnapFromForm(formValue: { title: string, description: string, imageUrl: string, location?: string }) : Observable<ProjetTile>
    {
      return this.getAllFaceSnaps().pipe(
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
