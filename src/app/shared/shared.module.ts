import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomRenderComponent } from './custom-render/custom-render.component';



@NgModule({
  declarations: [
    DatatableComponent,
    CustomRenderComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    DatatableComponent,
    CustomRenderComponent
  ]
})
export class SharedModule { }
