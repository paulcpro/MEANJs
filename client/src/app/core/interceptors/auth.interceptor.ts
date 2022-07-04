import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  //clone la requête reçue en ajoutant les modifications requises au clone.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Ajout du header avec notre token comme requete
    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.authService.getToken()}`);

    //Copie de la request car elle est immuable (non modifiable)
    const modifiedReq = req.clone({ headers });

    //passe ensuite la nouvelle requête à next.handle() pour lui permettre de continuer son chemin.
    return next.handle(modifiedReq);
  }
}
