import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-projet-tile',
  templateUrl: './new-projet-tile.component.html',
  styleUrls: ['./new-projet-tile.component.scss']
})
export class NewProjetTileComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  pattern!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private service: FaceSnapsService) { }

  ngOnInit(): void {
    this.pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    //Récupération des données du formBuilder en formGroup
    this.snapForm = this.formBuilder.group({
      //On Appel Validators.required pour exiger l'entrée de cette information par l'utilisateur
      title: [null, Validators.required],
      description: [null, Validators.required],
      //On mettra Validators.pattern pour mettre notre RegExp
      imageUrl: [null, [Validators.required, Validators.pattern(this.pattern)]],
      location: [null]
    }, {
      updateOn: 'blur' //Permet d'attendre que l'utilisateur finisse d'écrire dans le champs
      //Pour afficher la valeur (évite l'erreur du champs email)
    })

    //Emission Observable FaceSnap
    //On attribue les valeurs de notre snapForm au faceSnapPreview
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      //On va modifier la snapForm en rajoutant les champs manquant du FaceSnap
      //Pour que l'Observable émette un FaceSnap
      //Modification de l'observable
      map(formValue => ({
        //Récupère tous les champs du snapForm
        ...formValue,
        createDate: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmitForm() {
    console.log(this.snapForm.value);
    //Version avec le serveur
    this.service.addFaceSnapFromForm(this.snapForm.value).pipe(
      //Permet de savoir qu'on a eu une émission de l'ajout (sideEffect)
      tap(() => this.route.navigateByUrl('/facesnaps'))
      ).subscribe();
    // this.service.addFaceSnapFromForm(this.snapForm.value);
    // this.route.navigateByUrl('/facesnaps');
}

}
