import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss'],
})
export class OrgChartComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  chartData: any = [
    {
      label: 'parent1',
      child: [
        {
          label: 'child 1',
          child: [{
            label: 'Child 1.1'
          }, {
            label: 'Child 1.2'
          }
          ]
        },
        {
          label: 'child 2',
        },
        {
          label: 'chlid 3',
          child: [{
            label: 'child3.1'
          }]
        }
      ]
    }
  ]

}
