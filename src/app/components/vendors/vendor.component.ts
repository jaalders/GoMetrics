import { Component, OnInit, ViewChild } from '@angular/core';
import { IChart } from '../shared/chart';
import { DataService } from '../../services/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.sass']
})

export class VendorComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private dataService: DataService) {}

  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 0, initialDelay: 0},
    loop: false,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2];
  
  // this is my data constructor that can be used for my HTTP requests in the future. Just call functions to get data for input.
  data = this.dataService;

  public initiatedOrdersBarChart: IChart[] = [{
    ChartLabels: this.data.getBarChartData()[0].months,
    ChartDataSets: this.data.getBarChartData()[0].data,
    ChartData: [],
    ChartType: "bar",
    ChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: 'left'
      },
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    },
    Legend: true
  }];

  public pieChart: IChart[] = [{
    ChartLabels: this.dataService.getChart()[0].labels,
    ChartData: this.dataService.getChart()[0].data,
    ChartDataSets: [],
    Legend: true,
    ChartType: "pie",
    ChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: "left"
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function(tooltipItem, ChartData) {
            if (ChartData !== undefined) {
              let totalOfAllElements: number = 0;
              let percentage: number = 0;
              // the + in front of the ChartData value converts the value to a number to be used below.
              let currentElement: number = +ChartData['datasets']![0]['data']![tooltipItem['index']!]!;

              ChartData['datasets']![0]['data']!.forEach((element: any) => {
                totalOfAllElements += element;
              });
              percentage = +Math.round(currentElement / totalOfAllElements * 100).toFixed(2);
              // return formatted percentage to DOM.
              return ChartData['labels']![tooltipItem['index']!] + ': ' + percentage + '%';
            } else {
              // return regular string that chart.js uses to DOM.
              return ChartData['labels']![tooltipItem['index']!] + ': ' + ChartData['datasets']![0]['data']![tooltipItem['index']!];
            }
          }
        }
      }
    }
  }];

  public customerSignUpChart: IChart[] = [{
    ChartLabels: this.data.getCustomerOrderChartData()[0].months,
    ChartDataSets: this.data.getCustomerOrderChartData()[0].data,
    ChartData: [],
    Legend: true,
    ChartType: "line",
    ChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: "left"
      },
      onClick: () => {
        console.log("This is working!");
      },
      scales: { xAxes: [{}], yAxes: [{}] },
    }
  }];

  public initiatedOrdersBarChartForAerocare: IChart[] = [{
    ChartLabels: this.data.getBarChartDataForAerocare()[0].months,
    ChartDataSets: this.data.getBarChartDataForAerocare()[0].data,
    ChartData: [],
    ChartType: "bar",
    ChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: 'left'
      },
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    },
    Legend: true
  }];

  public productBreakdownForAerocare: IChart[] = [{
    ChartLabels: this.dataService.getOrderBreakdownForAerocare()[0].labels,
    ChartData: this.dataService.getOrderBreakdownForAerocare()[0].data,
    ChartDataSets: [],
    Legend: true,
    ChartType: "pie",
    ChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: "left"
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function(tooltipItem, ChartData) {
            if (ChartData !== undefined) {
              let totalOfAllElements: number = 0;
              let percentage: number = 0;
              // the + in front of the ChartData value converts the value to a number to be used below.
              let currentElement: number = +ChartData['datasets']![0]['data']![tooltipItem['index']!]!;

              ChartData['datasets']![0]['data']!.forEach((element: any) => {
                totalOfAllElements += element;
              });
              percentage = +Math.round(currentElement / totalOfAllElements * 100).toFixed(2);
              // return formatted percentage to DOM.
              return ChartData['labels']![tooltipItem['index']!] + ': ' + percentage + '%';
            } else {
              // return regular string that chart.js uses to DOM.
              return ChartData['labels']![tooltipItem['index']!] + ': ' + ChartData['datasets']![0]['data']![tooltipItem['index']!];
            }
          }
        }
      }
    }
  }];

  public customerSignUpChartForAerocare: IChart[] = [{
    ChartLabels: this.data.getCustomerChartDataForAerocare()[0].months,
    ChartDataSets: this.data.getCustomerChartDataForAerocare()[0].data,
    ChartData: [],
    Legend: true,
    ChartType: "line",
    ChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: "left"
      },
      onClick: () => {
        console.log("This is working!");
      },
      scales: { xAxes: [{}], yAxes: [{}] },
    }
  }];

  ngOnInit() {

  }

  doNothing() {

  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
