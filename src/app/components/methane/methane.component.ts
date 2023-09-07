import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { DataSet } from 'src/app/interfaces/charts';
import { Methane } from 'src/app/interfaces/methane';
import { catchError } from 'rxjs';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-methane',
  templateUrl: './methane.component.html',
  styleUrls: ['./methane.component.css']
})
export class MethaneComponent implements OnInit {
  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getMethane()
  }
  
  methane!: Methane[]
  methaneData: any

  dataSet!: DataSet[]
  labels!: Array<any>

  mainChartColor = '#23ad7aff'
  
  errorMessage: Error | null = null

  chartOptions: ChartOptions = {
    responsive: true
  }; 

  getMethane(){
    this.mainService.getMethane()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.methaneData = data
        this.methane = this.methaneData.methane

        this.labels = this.methane.map((e: Methane) => e.date)
        
        this.dataSet = [
          {data: this.methane.map((e: Methane) => e.average), label: 'average',
          fill: true,
          backgroundColor: this.mainChartColor,
          borderColor: this.mainChartColor,
          pointBackgroundColor: this.mainChartColor}
        ]
        console.log(this.methane)
      }
    )
  }
}
