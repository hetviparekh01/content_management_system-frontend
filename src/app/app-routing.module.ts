import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from './layout/horizontal/horizontal.component';

const routes: Routes = [
  {
    path:'',
    component:HorizontalComponent,
    loadChildren:()=>import('./pages/pages.module').then(e=>e.PagesModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./authentication/authentication.module').then(e=>e.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
