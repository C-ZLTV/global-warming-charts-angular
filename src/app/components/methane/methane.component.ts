import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { DataSet } from 'src/app/interfaces/charts';
import { Methane } from 'src/app/interfaces/methane';

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
  
  methane!: Methane[]
  methaneData: any

  dataSet!: DataSet[]
  labels!: Array<any>
  

  getMethane(){
    this.mainService.getMethane().subscribe(
      (data) => {
        this.methaneData = data
        this.methane = this.methaneData.methane

        this.labels = this.methane.map((e: Methane) => e.date)
        
        this.dataSet = [
          {data: this.methane.map((e: Methane) => e.average), label: 'average',
          fill: true}
        ]
        console.log(this.methane)
      }
    )
  }
}
