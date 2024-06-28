import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomRenderComponent } from './custom-render/custom-render.component';
import { CardComponent } from './card/card.component';
import { AppChartComponent } from './chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LineChartComponent } from './line-chart/line-chart.component';
@NgModule({
  declarations: [
    DatatableComponent,
    CustomRenderComponent,
    CardComponent,
    AppChartComponent,
    LineChartComponent,
  ],
  imports: [CommonModule, AgGridAngular, NgApexchartsModule],
  exports: [
    DatatableComponent,
    CustomRenderComponent,
    CardComponent,
    AppChartComponent,
    LineChartComponent
  ],
})
export class SharedModule {}
