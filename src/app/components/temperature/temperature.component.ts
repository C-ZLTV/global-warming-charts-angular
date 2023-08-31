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

  getTemp(){
    this.mainService.getTemp().subscribe(
      (data) => {
        this.temp = data
        console.log(this.temp)
      }
    )
  }
}
