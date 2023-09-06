import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { No2 } from 'src/app/interfaces';
import { DataSet } from 'src/app/interfaces';

@Component({
  selector: 'app-no2',
  templateUrl: './no2.component.html',
  styleUrls: ['./no2.component.css']
})
export class No2Component implements OnInit{
  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getNo2()
  }
  
  no2!: No2[]
  no2Data: any

  labels!: Array<number>
  dataSet!: DataSet[]

  getNo2(){
    this.mainService.getNo2().subscribe(
      (data) => {
        this.no2Data = data
        this.no2 = this.no2Data.nitrous

        this.labels = this.no2.map((e: No2) => e.date)

        this.dataSet = [
          {data: this.no2.map((e: No2) => e.average), label: 'average', 
          fill: true}]
        console.log(this.no2)
      }
    )
  }
}
