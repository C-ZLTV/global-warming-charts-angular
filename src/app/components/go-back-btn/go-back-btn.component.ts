import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-back-btn',
  templateUrl: './go-back-btn.component.html',
  styleUrls: ['./go-back-btn.component.css']
})
export class GoBackBtnComponent {

  constructor(private router: Router){}

  goBack(): void{
    this.router.navigate(['/homepage'])
  }
}
