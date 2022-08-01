import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { NewProfileComponent } from './components/new-profile/new-profile.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SingleProfileComponent } from './components/single-profile/single-profile.component';

@NgModule({
  declarations: [
    SingleProfileComponent,
    NewProfileComponent,
    ProfileListComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule, // Ajoute à la route racine nos routes childs
    ReactiveFormsModule
  ],
  exports : [
    SingleProfileComponent,
    NewProfileComponent,
    ProfileListComponent,
    ProfileComponent
  ]
})

export class ProfilesModule { }
