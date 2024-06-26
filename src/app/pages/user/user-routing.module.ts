import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUserComponent } from './get-all-user/get-all-user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getalluser',
    pathMatch:'full'
  },
  {
    path:'getalluser',
    component:GetAllUserComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
