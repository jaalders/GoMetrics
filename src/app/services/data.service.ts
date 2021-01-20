import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
// Data is too generic
export class DataService {

    public fetchURL = "app/api/charts/chartSettings.json";

    getChart() {
        return [
            { 
                data: [300, 500, 100, 40, 1000], 
                labels: ['Oxygen', 'Tens Unit', 'Seat Lift', 'BiPap', 'Ventilator'] 
            },
        ];
    }

    getPatientDemographics() {
        return [
            { 
                data: [567, 1546], 
                labels: ['Male', 'Female'] 
            },
        ]
    }

    getProviderOrderBreakdown() {
        return [
            { 
                data: [300, 500, 100, 40, 330, 125, 420], 
                labels: ['Medicaid', 'Blue Cross', 'Chicago Medical', 'Intense Insurance', 'Hawkings Insurance', 'AeroStar Insurance', 'Farmers Insurance'] 
            },
        ];
    }

    getProviderProcessingTime() {
        return [
            { 
                data: [300, 500, 100, 40, 1000], 
                labels: ['One', 'Two', 'Three', 'Four', 'Five+'] 
            },
        ]
    }

    getPatientOrdersByAge() {
        return [
            {
                months: [
                    '0-10', '11-21', '22-32', '33-43', '44-54', '55-65', '66-76', '77-87', '88-98', '99+'
                ],
                data: [
                    { data: [1, 2, 3, 4, 12, 7, 5, 12, 7, 1], label: 'Male' },
                    { data: [0, 0, 12, 19, 22, 27, 11, 8, 5, 2], label: 'Female' }
                ]
            }
        ]
    }

    getCustomerOrderChartData() {
        return [
            { 
                months: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July'
                ],
                data: [
                    { data: [65, 59, 80, 81, 56, 55, 40], label: 'New Orders' },
                    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Recertification Orders' },
                    { data: [28, 75, 33, 5, 101, 45, 75], label: 'Future Dated Orders' }
                ]
            }
        ]
    }

    getCustomerChartDataForAerocare() {
        return [
            { 
                months: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July'
                ],
                data: [
                    { data: [99, 74, 22, 33, 45, 14, 62], label: 'New Orders' },
                    { data: [86, 44, 85, 30, 80, 27, 19], label: 'Recertification Orders' },
                    { data: [81, 36, 37, 5, 18, 37, 95], label: 'Future Dated Orders' }
                ]
            }
        ]
    }

    getBarChartDataForAerocare() {
        return [
            {
                months: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July'
                ],
                data: [
                    { data: [99, 22, 75, 66, 22, 55, 87], label: 'Vendor Initiated Orders' },
                    { data: [64, 78, 55, 19, 23, 9, 22], label: 'Physician Initated Orders' }
                ]
            }
        ]
    }

    getOrderBreakdownForAerocare() {
        return [
            { 
                data: [174, 232, 78, 89, 122], 
                labels: ['Oxygen', 'Tens Unit', 'Seat Lift', 'BiPap', 'Ventilator'] 
            },
        ];
    }

    getPhysicianOrderList() {
        return [
            { 
                months: [
                    'January', 'February', 'March'
                ],
                data: [
                    { data: [15, 90, 101], label: 'Denzel Morrow' },
                    { data: [45, 90, 45], label: 'Joshua Regan' },
                    { data: [78, 37, 60], label: 'Greg Griffin' },
                    { data: [150, 32, 37], label: 'Cecil Whittington' },
                    { data: [52, 78, 98], label: 'Tayyab Hodge' }
                ]
            }
        ]
    }

    getBarChartData() {
        return [
            {
                months: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July'
                ],
                data: [
                    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Vendor Initiated Orders' },
                    { data: [28, 48, 40, 19, 86, 27, 88], label: 'Physician Initated Orders' }
                ]
            }
        ]
    }
}