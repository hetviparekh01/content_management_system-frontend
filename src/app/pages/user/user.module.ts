import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { GetAllUserComponent } from './get-all-user/get-all-user.component';


@NgModule({
  declarations: [
    ProfileComponent,
    GetAllUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
