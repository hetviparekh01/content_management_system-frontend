import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTheme,
  ChartType,
} from 'ng-apexcharts';
import { UserService } from 'src/app/core/services/user.service';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class AppChartComponent implements OnInit {
  totalViewer!: number;
  totalEditor!: number;
  totalAdmin!: number;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUserType();
  }
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  // public chartOptions: ChartOptions  = {
  //   series: [
  //     {
  //       name: 'My-series',
  //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  //     },
  //   ],
  //   chart: {
  //     height: 350,
  //     type: 'bar',
  //   },
  //   title: {
  //     text: 'My First Angular Chart',
  //   },
  //   xaxis: {
  //     categories: [
  //       'Jan',
  //       'Feb',
  //       'Mar',
  //       'Apr',
  //       'May',
  //       'Jun',
  //       'Jul',
  //       'Aug',
  //       'Sep',
  //     ],
  //   },
  // };
  getUserType() {
    this.userService.getUserType().subscribe({
      next: (response) => {
        this.totalViewer = response.content.totalViewer;
        this.totalEditor = response.content.totalEditor;
        this.totalAdmin = response.content.totalAdmin;
        this.chartOptions = {
          series: [this.totalViewer, this.totalEditor],
          chart: {
            width: '31%',
            type: 'pie' as ChartType,
          },
          labels: ['viewer', 'editor'],
          theme: {
            monochrome: {
              enabled: true,
            },
          },
          title: {
            text: 'Number of leads',
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        };
      },
    });
  }
}
