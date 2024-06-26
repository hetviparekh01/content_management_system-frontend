import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ViewContentComponent } from './view-content/view-content.component';
import { UploadcontentComponent } from './uploadcontent/uploadcontent.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticularContentComponent } from './particular-content/particular-content.component';


@NgModule({
  declarations: [
  
    ViewContentComponent,
       UploadcontentComponent,
       ParticularContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentModule { }
