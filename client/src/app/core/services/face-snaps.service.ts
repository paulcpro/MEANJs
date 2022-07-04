import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps$!: Observable<FaceSnap[]>;
  faceSnaps: FaceSnap[] = [
    // {
    //   id: 1,
    //   title: "Archibald",
    //   description: "Mon meilleur ami depuis tout petit !",
    //   createDate: new Date(),
    //   snaps: 350,
    //   imageUrl: "https://ih0.redbubble.net/image.914734630.8907/flat,1000x1000,075,f.u1.jpg",
    //   location: "Paris"
    // },
    // {
    //   id: 2,
    //   title: "Kaneki",
    //   description: "Le boss",
    //   createDate: new Date(),
    //   snaps: 0,
    //   imageUrl: "https://ih0.redbubble.net/image.914734630.8907/flat,1000x1000,075,f.u1.jpg",
    //   location: "Bretagne"
    // },
    // {
    //   id: 3,
    //   title: "Ken",
    //   description: "Le pgm",
    //   createDate: new Date(),
    //   snaps: 10,
    //   imageUrl: "https://ih0.redbubble.net/image.914734630.8907/flat,1000x1000,075,f.u1.jpg"
    // }
  ]

  faceSnap$!: Observable<FaceSnap>;

    constructor(private http: HttpClient) {}

    //Renvoie les instances crées ci-dessus
    getAllFaceSnaps(): Observable<FaceSnap[]> {
      // return this.faceSnaps;
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    //Récupère un FaceSnap et son état (snap ou unSnap)
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unSnap'): Observable<FaceSnap> {
      //On récupère l'id du FaceSnap pour le modifier et rajouter le snap
      return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
          //Accolade car on renvoie un objet
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType == 'snap' ? +1 : -1)
      })),
      //Envoi de la modif dans la db
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updatedFaceSnap)
    )
      )

      // const faceSnap = this.getFaceSnapById(faceSnapId);
      // const faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnap.id); //On va chercher son Id dans notre tableau

      // if(snapType === 'snap') {
      //   faceSnap.snaps++;
      // } else if(snapType === 'unSnap'){
      //   faceSnap.snaps--;
      // } else {
      //   throw new Error('Wrong snapType')
      // }
    }

    getFaceSnapById(faceSnapId: number = 0): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

      // const faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnap.id); // trouver un élément (faceSnap) dans le tableau (faceSnaps) par l'id passé en argument
      // if(faceSnap) {
      //   return faceSnap;
      // } else {
      //   throw new Error('FaceSnap not found');
      // }
    }

    //Méthode qui génère une requête (post) donc retourne une requête
    addFaceSnapFromForm(formValue: { title: string, description: string, imageUrl: string, location?: string }) : Observable<FaceSnap>
    {
      //On assigne un Objet qui comprendra les valeurs du formulaire
      //Ainsi que celle manquante pour faire un FaceSnap
      // const singleFaceSnap: FaceSnap = {
      //   ...formValue,
      //   //On récupère le dernier élément du tableau FaceSnaps et on ajoute + en fonction de son ID
      //   id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      //   snaps: 0,
      //   createDate: new Date()
      // };

      //Attend la réception ou l'émission de notre Observable
      return this.getAllFaceSnaps().pipe(
        //getAllFaceSnaps renvoie  la liste de faceSnap
        //On va modifier la liste avec map puis renvoyer la liste
        // [...faceSnaps] effectue une copie du tableau faceSnaps
        //sort. compare toutes les paires de FaceSnap et les met par ordre croissant
        map(faceSnaps => [...faceSnaps].sort((a: FaceSnap,b: FaceSnap) => a.id - b.id)),
        //Récupère le dernier faceSnap trié
        map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
        map(previousFaceSnap => ({
          ...formValue,
          id: previousFaceSnap.id + 1,
          snaps: 0,
          createDate: new Date()
        })),
        //Envoie au serveur + requête
        switchMap(newFaceSnap =>
            //On ajoute le FaceSnap Créée à notre liste de FaceSnap
            // this.faceSnaps.push(singleFaceSnap);

            //On envoie notre newFaceSnap via l'URL
            this.http.post<FaceSnap>(`http://localhost:3000/facesnaps/`, newFaceSnap)
          )
      );


    }

    //Snap un FaceSnap pour augmenter son nombre
    // snapFaceSnapById(faceSnapId: number): void {
    //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnap.id); //On va chercher son Id dans notre tableau
    //   if(faceSnap) {  //On vérifie que l'id existe
    //     faceSnap.snaps++; //On augmente le nombre de snap de celui qu'on a trouvé dans le tableau
    //   } else {
    //     throw new Error('FaceSnap not found');
    //   }
    // }

    // //Retirer un FaceSnap pour diminuer son nombre
    // unSnapFaceSnapById(faceSnapId: number): void {
    //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnap.id); //On va chercher son Id dans notre tableau
    //   if(faceSnap) {  //On vérifie que l'id existe
    //     faceSnap.snaps--; //On augmente le nombre de snap de celui qu'on a trouvé dans le tableau
    //   } else {
    //     throw new Error('FaceSnap not found');
    //   }
    // }
}
