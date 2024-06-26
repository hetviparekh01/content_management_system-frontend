import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'content',
    loadChildren:()=>import('./content/content.module').then(e=>e.ContentModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(e=>e.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
