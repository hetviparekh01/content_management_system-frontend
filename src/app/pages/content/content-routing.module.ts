import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContentComponent } from './view-content/view-content.component';
import { UploadcontentComponent } from './uploadcontent/uploadcontent.component';
import { ParticularContentComponent } from './particular-content/particular-content.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'viewcontent',
    pathMatch:'full'
  },
  {
    path:'viewcontent',
    component:ViewContentComponent
  },
  {
    path:'uploadcontent',
    component:UploadcontentComponent
  },
  {
    path:'particularcontent/:id',
    component:ParticularContentComponent
  },
  {
    path:'updatecontent/:id',
    component:UploadcontentComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
