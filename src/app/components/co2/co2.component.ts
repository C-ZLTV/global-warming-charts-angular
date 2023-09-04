import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-co2',
  templateUrl: './co2.component.html',
  styleUrls: ['./co2.component.css']
})
export class Co2Component {
  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getMethane()
  }
    
co2: any
 co2Data: any

  dataSet:{data: any[], label: string, fill: boolean, borderColor: string, borderWidth: number, tension:number}[]  = []
  labels!: Array<number>

  chartOptions: any = {
    responsive: true
  };  
  
  getMethane(){
    this.mainService.getCo2().subscribe(
      (data) => {
        this.co2Data = data
        this.co2 = this.co2Data.co2

        this.labels = this.co2.map((e: any) => e.year)
        
        this.dataSet = [
          {data: this.co2.map((e: any) => e.trend),
            label: 'trend', fill:true, borderColor: '#fff', borderWidth: 1, tension: 0.5}
        ]
        console.log(this.co2)
      }
    )
  }
}
