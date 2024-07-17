import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrl: './workout-chart.component.css',
})
export class WorkoutChartComponent {
  users = [
    { name: 'User 1' },
    { name: 'User 2' },
    { name: 'User 3' },
    { name: 'User 4' },
    { name: 'User 5' },
  ];

  chartOptions: EChartsOption = {
    title: {
      text: 'Sample Chart',
    },
    tooltip: {},
    xAxis: {
      data: ['category1', 'category2', 'category3', 'category4', 'category5'],
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10],
      },
    ],
  };
}
