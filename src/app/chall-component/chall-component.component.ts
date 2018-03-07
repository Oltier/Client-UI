import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chall-component',
  templateUrl: './chall-component.component.html',
  styleUrls: ['./chall-component.component.css']
})

export class ChallComponentComponent implements OnInit {
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [129, 110, 100, 130,110,109,120], label: 'BP' },
    { data: [81, 73, 70, 90,80,72,75], label: 'HB' },
    { data: [83, 73, 74, 85,90,80,75], label: 'Weight' }
  ];
  chartLabels = ['Sat', 'Sun', 'Mon', 'Tue','Wed','Thus','Fri'];

  onChartClick(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
