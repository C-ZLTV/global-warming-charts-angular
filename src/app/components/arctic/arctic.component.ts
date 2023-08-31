import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-arctic',
  templateUrl: './arctic.component.html',
  styleUrls: ['./arctic.component.css']
})
export class ArcticComponent implements OnInit{

  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getArctic()
  }
  
  arctic: any

  getArctic(){
    this.mainService.getArctic().subscribe(
      (data) => {
        this.arctic = data
        console.log(this.arctic)
      }
    )
  }
}
