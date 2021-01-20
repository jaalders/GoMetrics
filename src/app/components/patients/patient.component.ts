import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { IChart } from '../shared/chart';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})

export class PatientComponent implements AfterViewInit {
  // data is too generic
  data = this.dataService;

  public orderDemographicsByAge: IChart[] = [{
    ChartLabels: this.data.getPatientOrdersByAge()[0].months,
    ChartDataSets: this.data.getPatientOrdersByAge()[0].data,
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

  // more of a question, could this be moved to a service class as well ?
  public orderDemographicsByGender: IChart[] = [{
    ChartLabels: this.dataService.getPatientDemographics()[0].labels,
    ChartData: this.dataService.getPatientDemographics()[0].data,
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
            if (ChartData !== undefined) { // if (ChartData) // not sure `!== undefined` is needed
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

  public orderBreakdownByProvider: IChart[] = [{
    ChartLabels: this.dataService.getProviderOrderBreakdown()[0].labels,
    ChartData: this.dataService.getProviderOrderBreakdown()[0].data,
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

  public orderProviderProcessingTime: IChart[] = [{
    ChartLabels: this.dataService.getProviderProcessingTime()[0].labels,
    ChartData: this.dataService.getProviderProcessingTime()[0].data,
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
  
  constructor(private cdr: ChangeDetectorRef, private dataService: DataService) {}
  
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}