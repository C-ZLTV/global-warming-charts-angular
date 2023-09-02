import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-arctic',
  templateUrl: './arctic.component.html',
  styleUrls: ['./arctic.component.css']
})
export class ArcticComponent implements OnInit {

  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getArcticData()
  }
  
  arctic: any
  arcticData: any
  
  datasets = [{data: [], label: ''}]
  lables!: number[]

  getArcticData(){
    this.mainService.getArctic()
    .subscribe(
      (data) => {
        this.arctic = data
        this.arcticData = this.arctic.arcticData
        
        this.lables = this.arcticData.map((e:any) => e.year)

        this.datasets = [
          {data: this.arcticData.map((e:any) => e.area), label: 'area' },
          {data: this.arcticData.map((e:any) => e.extent), label: 'extent'},
          {data: this.arcticData.map((e:any) => e.rank), label: 'rank' }
        ]
        console.log(this.arcticData)
      }
    )
  }
}
