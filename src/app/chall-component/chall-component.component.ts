import { Component, OnInit,OnChanges,SimpleChanges, Input,DoCheck } from '@angular/core';

@Component({
  selector: 'app-chall-component',
  templateUrl: './chall-component.component.html',
  styleUrls: ['./chall-component.component.css']
})

export class ChallComponentComponent implements OnInit {
 
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  }; //
  chartData1 = [
    { data:  [129, 110, 100, 130, 110, 109, 120], label: 'BP' },
    { data: [86, 78, 75, 96, 87, 87, 79], label: 'HB' },
    { data: [83, 73, 74, 85, 90, 80, 75], label: 'Weight' }
  ];
  chartData2 = [
    { data: [111, 121, 130, 100, 130, 79, 150], label: 'BP' },
    { data: [66, 104, 95, 66, 99, 70, 71], label: 'HB' },
    { data: [93, 73, 75, 90, 61, 65, 82], label: 'Weight' }
  ];/*
  chartData2 = [
    { data: [134, 115, 100, 130, 110, 109, 120], label: 'BP' },
    { data: [86, 84, 75, 96, 89, 92, 85], label: 'HB' },
    { data: [73, 63, 64, 80, 85, 70, 65], label: 'Weight' }
  ];
  chartData3 = [
    { data: [134, 115, 105, 130, 110, 109, 120], label: 'BP' },
    { data: [86, 84, 86, 96, 97, 92, 85], label: 'HB' },
    { data: [73, 63, 64, 80, 85, 75, 65], label: 'Weight' }
  ];
  chartData4 = [
    { data: [134, 115, 105, 135, 110, 109, 120], label: 'BP' },
    { data: [86, 84, 86, 101, 97, 92, 85], label: 'HB' },
    { data: [73, 63, 64, 80, 85, 75, 71], label: 'Weight' }
  ];
  chartData5 = [
    { data: [134, 115, 105, 135, 115, 109, 120], label: 'BP' },
    { data: [86, 84, 92, 101, 97, 92, 85], label: 'HB' },
    { data: [73, 63, 69, 80, 85, 75, 71], label: 'Weight' }
  ];
  chartData6 = [
    { data: [134,115,105,135,115, 116,120], label: 'BP' },
    { data: [86, 89, 92, 101, 97, 92, 85], label: 'HB' },
    { data: [73, 68, 69, 80, 85, 75, 71], label: 'Weight' }
  ];
  chartData7 = [
    { data: [134, 115, 105, 135, 115, 114, 125], label: 'BP' },
    { data: [83, 89, 92, 101, 97, 92, 85], label: 'HB' },
    { data: [78, 68, 69, 80, 85, 75, 71], label: 'Weight' }
  ];*/
  chartLabels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri'];
  chartData=this.chartData1;

  intervalId = 0;
  count = 0;
  message = '';
  seconds = 11;
  onChartClick(event) {
    // console.log(event);
   // console.log(this.chartData[0].data.length);
   // console.log(this.getRandomInt(50,60))
  }
  constructor() { }

  ngOnInit() {
    this.countDown();
  }
  private countDown() {
    
    this.intervalId = window.setInterval(() => {
     if(this.chartData==this.chartData1)
      this.chartData=this.chartData2;
      else //if(this.chartData==this.chartData2)
      this.chartData=this.chartData1;
      /*else if(this.chartData==this.chartData3)
      this.chartData=this.chartData4
      else if(this.chartData==this.chartData4)
      this.chartData=this.chartData5
      else if(this.chartData==this.chartData6)
      this.chartData=this.chartData6
      else if(this.chartData==this.chartData6)
      this.chartData=this.chartData7
      else 
      this.chartData=this.chartData1*/

      window.clearInterval
      //to delete
     // this.chartData=this.chartData2
     // console.log(this.chartData[0].data);
      
    }, 1000);
  }
//to delete later
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
