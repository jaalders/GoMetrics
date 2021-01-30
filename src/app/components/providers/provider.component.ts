import { Component, OnInit } from '@angular/core';
import { IChart } from '../shared/chart';
import { DataService } from '../../services/data.service';

export interface PhysicianNames {
  name: string;
  position: number;
  orderMonthlyChange: string;
  orderTotalThisYear: string;
}

const ELEMENT_DATA: PhysicianNames[] = [
  { position: 1, name: 'Denzel Morrow', orderMonthlyChange: '+10%', orderTotalThisYear: "101" },
  { position: 2, name: 'Joshua Regan', orderMonthlyChange: '-45%', orderTotalThisYear: "45" },
  { position: 3, name: 'Greg Griffin', orderMonthlyChange: '+23%', orderTotalThisYear: "60" },
  { position: 4, name: 'Cecil Whittington', orderMonthlyChange: '+12%', orderTotalThisYear: "37" },
  { position: 5, name: 'Tayyab Hodge',  orderMonthlyChange: '-23%', orderTotalThisYear: "98" },
];

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.sass']
})

export class ProviderComponent implements OnInit {

  constructor(private dataService: DataService) {
    
  }
  
  // this is my data constructor that can be used for my HTTP requests in the future. Just call functions to get data for input.
  data = this.dataService;

  displayedColumns: string[] = ['position', 'name', 'orderMonthlyChange', 'orderTotalThisYear'];
  // datasource for this data is above as an array.
  dataSource = ELEMENT_DATA;

  // could be moved to a service class as well or a config service class 
  public phyisicanOrdersPerMonth: IChart[] = [{
    ChartLabels: this.data.getPhysicianOrderList()[0].months,
    ChartDataSets: this.data.getPhysicianOrderList()[0].data,
    ChartData: [],
    Legend: true,
    ChartType: "line",
    ChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        position: "left"
      },
      // place holder ?
      onClick: () => {
        console.log("This is working!");
      },
      scales: { xAxes: [{}], yAxes: [{}] },
    }
  }];

  ngOnInit() {

  }

  doNothing() {
    alert(1);
  }
}
