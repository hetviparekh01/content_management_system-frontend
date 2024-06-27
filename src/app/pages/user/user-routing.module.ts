import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUserComponent } from './get-all-user/get-all-user.component';
import { ProfileComponent } from './profile/profile.component';
import { AdduserComponent } from './adduser/adduser.component';
import { adminGuard } from 'src/app/core/guard/admin.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getalluser',
    pathMatch:'full'
  },
  {
    path:'getalluser',
    component:GetAllUserComponent,
    canActivate:[adminGuard]
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'adduser',
    component:AdduserComponent,
    canActivate:[adminGuard]

  },
  {
    path:'edituser/:id',
    component:AdduserComponent,
    canActivate:[adminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
