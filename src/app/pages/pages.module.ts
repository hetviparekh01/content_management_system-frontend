import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [
    DashboardComponent,
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgxPermissionsModule.forChild()
  ]
})
export class PagesModule { }
