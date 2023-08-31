import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-methane',
  templateUrl: './methane.component.html',
  styleUrls: ['./methane.component.css']
})
export class MethaneComponent implements OnInit {
  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getMethane()
  }
  
  methane: any

  getMethane(){
    this.mainService.getMethane().subscribe(
      (data) => {
        this.methane = data
        console.log(this.methane)
      }
    )
  }
}
