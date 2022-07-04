import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

//Path pour accéder depuis l'extérieur à notre module
const routes : Routes = [
  { path: 'auth/login', component: LoginComponent },
]

@NgModule({

  //Ré-importation pour donner l'accès à l'extérieur à notre module
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule { }
