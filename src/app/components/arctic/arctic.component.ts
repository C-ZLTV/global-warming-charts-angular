import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Arctic } from 'src/app/interfaces/arctic';
import { DataSet } from 'src/app/interfaces/charts';
import { catchError } from 'rxjs';
import { ChartOptions } from 'chart.js';
import { Colors } from 'chart.js';

@Component({
  selector: 'app-arctic',
  templateUrl: './arctic.component.html',
  styleUrls: ['./arctic.component.css']
})
export class ArcticComponent implements OnInit {

  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getArcticData()
  }
  
  arctic: any
  arcticData!: Arctic[]
  
  datasets!: any
  lables!: number[]

  mainChartColor: string = 'black'

  chartOptions: ChartOptions = {
    responsive: true,
    //TODO: responsive options
    //TODO: custom color
  }; 

  errorMessage: Error | null = null

  getArcticData(){
    this.mainService.getArctic()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.arctic = data
        this.arcticData = this.arctic.arcticData
        
        this.lables = this.arcticData.map((e:Arctic) => e.year)

        this.datasets = [
          {data: this.arcticData.map((e:Arctic) => e.area),
          label: 'area', 
          fill: true,
          backgroundColor: this.mainChartColor,
          borderColor: this.mainChartColor,
          pointBackgroundColor: this.mainChartColor,
        }
        ]
        console.log(this.arcticData)
      }
    )
  }
}
