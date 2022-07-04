import { Component } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  interval$!: Observable<string>;
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  // *** Opérateurs haut niveau ***
  ngOnInit() {
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000) //Appel tous les 5000ms pour le rouge et 6000ms pour le jaune
    );
  }
  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }

    logger(text: string){
      console.log(text);
    }
}
