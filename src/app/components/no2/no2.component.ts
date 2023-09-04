import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

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
  
  no2: any
  no2Data: any
  labels!: Array<number>
  dataSet = [{data: [], label: ''}]

  getNo2(){
    this.mainService.getNo2().subscribe(
      (data) => {
        this.no2Data = data
        this.no2 = this.no2Data.nitrous

        this.labels = this.no2.map((e: any) => e.date)

        this.dataSet = [
          {data: this.no2.map((e: any) => e.average), label: 'average'}]
        console.log(this.no2)
      }
    )
  }
}
