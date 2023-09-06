import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Temperature } from 'src/app/interfaces';
import { DataSet } from 'src/app/interfaces';

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
  
  temp!: Temperature[]
  tempData: any
  labels!: Array<number>
  dataSet!: DataSet[]

  getTemp(){
    this.mainService.getTemp().subscribe(
      (data) => {
        this.tempData = data
        this.temp = this.tempData.result

        this.labels = this.temp.map((e: Temperature) => e.time)

        this.dataSet = [{data: this.temp.map((e: Temperature) => e.land), label: 'land',
        fill: false},]
        console.log(this.temp)
      }
    )
  }
}
