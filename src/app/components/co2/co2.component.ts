import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-co2',
  templateUrl: './co2.component.html',
  styleUrls: ['./co2.component.css']
})
export class Co2Component implements OnInit {
  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getCo2()
  }
  
  co2: any

  getCo2(){
    this.mainService.getCo2().subscribe(
      (data) => {
        this.co2 = data
        console.log(this.co2)
      }
    )
  }
}
