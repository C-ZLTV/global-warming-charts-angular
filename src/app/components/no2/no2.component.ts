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

  getNo2(){
    this.mainService.getNo2().subscribe(
      (data) => {
        this.no2 = data
        console.log(this.no2)
      }
    )
  }
}
