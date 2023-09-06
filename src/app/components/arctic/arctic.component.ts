import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Arctic } from 'src/app/interfaces/arctic';
import { DataSet } from 'src/app/interfaces/charts';
import { catchError, tap } from 'rxjs';

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
  
  datasets!: DataSet[]
  lables!: number[]

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
          {data: this.arcticData.map((e:Arctic) => e.area), label: 'area', fill: true}
        ]
        console.log(this.arcticData)
      }
    )
  }
}
