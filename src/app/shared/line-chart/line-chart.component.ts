import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';
import { ContentService } from 'src/app/core/services/content.service';
import { UserService } from 'src/app/core/services/user.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit,AfterViewInit {
  constructor(
    private userService: UserService,
    private contentService: ContentService
  ) { }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this.getContentByMonth();
  }
  
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  getContentByMonth() {
    this.contentService.getContentByMonth().subscribe({
      next: (response) => {
        const month = response?.content.map((element: { month: any }) => {
          return element.month;
        });
        const totalContent = response?.content.map((element: { count: any }) => {
          return element.count;
        });
      
        this.chartOptions = {
          series: [
            {
              name: 'Desktops',
              data: totalContent,
            },
          ],
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'straight',
          },
          title: {
            text: 'Total Content Per Month',
            align: 'left',
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: month,
          },
        };
      },
    });
  }
}
