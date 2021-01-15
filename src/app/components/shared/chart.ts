import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label, MultiDataSet, SingleDataSet } from "ng2-charts";

export interface IChart {
    ChartLabels: Label[];
    ChartData: SingleDataSet | MultiDataSet;
    Legend: boolean;
    ChartType: ChartType;
    ChartOptions: ChartOptions;
    ChartDataSets: ChartDataSets[];
}

// export class IChart {
//     returnValues () {
//         return "blarg";
//     }
// }

// we could add a class structure here to help with certain calculations. Might have to for fetching data.