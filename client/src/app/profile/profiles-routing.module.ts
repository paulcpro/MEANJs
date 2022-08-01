import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NewProfileComponent } from './components/new-profile/new-profile.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { SingleProfileComponent } from './components/single-profile/single-profile.component';

const routes: Routes = [
  { path: 'create', component: NewProfileComponent, canActivate: [AuthGuard] },
  { path: ':id', component: SingleProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: ProfileListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilesRoutingModule {}
