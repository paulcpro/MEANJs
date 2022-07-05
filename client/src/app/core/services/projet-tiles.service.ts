import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe, switchMap } from 'rxjs';
import { ProjetTile } from '../models/projet-tile.model';

@Injectable({
  providedIn: 'root'
})

export class ProjetTilesService {
  projetTiles$!: Observable<ProjetTile[]>;
  projetTiles: ProjetTile[] = []

  faceSnap$!: Observable<ProjetTile>;

    constructor(private http: HttpClient) {}

    //Renvoie les instances crées ci-dessus
    getAllFaceSnaps(): Observable<ProjetTile[]> {
      // return this.faceSnaps;
      return this.http.get<ProjetTile[]>('http://localhost:3000/facesnaps');
    }

    //Récupère un FaceSnap et son état (snap ou unSnap)
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unSnap'): Observable<ProjetTile> {
      //On récupère l'id du FaceSnap pour le modifier et rajouter le snap
      return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
          //Accolade car on renvoie un objet
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType == 'snap' ? +1 : -1)
      })),
      //Envoi de la modif dans la db
      switchMap(updatedFaceSnap => this.http.put<ProjetTile>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updatedFaceSnap)
    ))
    }

    getFaceSnapById(faceSnapId: number = 0): Observable<ProjetTile> {
      return this.http.get<ProjetTile>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    addFaceSnapFromForm(formValue: { title: string, description: string, imageUrl: string, location?: string }) : Observable<ProjetTile>
    {
      return this.getAllFaceSnaps().pipe(
        map(faceSnaps => [...faceSnaps].sort((a: ProjetTile,b: ProjetTile) => a.id - b.id)),
        map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
        map(previousFaceSnap => ({
          ...formValue,
          id: previousFaceSnap.id + 1,
          snaps: 0,
          createDate: new Date()
        })),
        switchMap(newFaceSnap =>
            this.http.post<ProjetTile>(`http://localhost:3000/facesnaps/`, newFaceSnap)
          )
      );
    }
}
