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
  methaneData: any

  dataSet = [{data: [], label: ''}]
  labels!: Array<any>
  

  getMethane(){
    this.mainService.getMethane().subscribe(
      (data) => {
        this.methaneData = data
        this.methane = this.methaneData.methane

        this.labels = this.methane.map((e: any) => e.date)
        
        this.dataSet = [
          {data: this.methane.map((e: any) => e.average), label: 'average'}
        ]
        console.log(this.methane)
      }
    )
  }
}
