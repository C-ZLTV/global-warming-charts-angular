import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back-btn',
  templateUrl: './go-back-btn.component.html',
  styleUrls: ['./go-back-btn.component.css']
})
export class GoBackBtnComponent {

  constructor(private location: Location){}

  goBack(){
    this.location.back()
  }
}
