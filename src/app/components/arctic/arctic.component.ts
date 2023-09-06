import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Arctic } from 'src/app/interfaces/arctic';
import { DataSet } from 'src/app/interfaces/charts';

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

  getArcticData(){
    this.mainService.getArctic()
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
