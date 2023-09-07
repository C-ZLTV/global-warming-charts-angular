import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { DataSet } from 'src/app/interfaces/charts';
import { ChartOptions } from 'chart.js';
import { Co2 } from 'src/app/interfaces/co2';
import { catchError } from 'rxjs';

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
    
 co2!: Co2[]
 co2Data: any

  dataSet!: DataSet[]
  labels!: number[]

  mainChartColor = '#012239ff'


  errorMessage: Error | null = null

  chartOptions: ChartOptions = {
    responsive: true
  };  

  getMethane(){
    this.mainService.getCo2()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.co2Data = data
        this.co2 = this.co2Data.co2

        this.labels = this.co2.map((e: Co2) => e.year)
        
        this.dataSet = [
          {data: this.co2.map((e: Co2) => e.trend),
            label: 'trend',
            fill:true,
            backgroundColor: this.mainChartColor,
            borderColor: this.mainChartColor,
            pointBackgroundColor: this.mainChartColor,}
        ]
        console.log(this.co2)
      }
    )
  }
}
