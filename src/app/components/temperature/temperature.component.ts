import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getTemp()
  }
  
  temp: any
  tempData: any
  labels!: Array<number>
  dataSet = [{data: [], label: ''}]

  getTemp(){
    this.mainService.getTemp().subscribe(
      (data) => {
        this.tempData = data
        this.temp = this.tempData.result

        this.labels = this.temp.map((e: any) => e.time)

        this.dataSet = [{data: this.temp.map((e: any) => e.land), label: 'land'}]
        console.log(this.temp)
      }
    )
  }
}
