import { ComponentFixture, TestBed } from '@angular/core/testing';
import { No2Component } from './no2.component';

import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { MainService } from 'src/app/services/main.service';
import { ErrorComponent } from '../error/error.component';
import { GoBackBtnComponent } from '../go-back-btn/go-back-btn.component';

describe('No2Component', () => {
  let component: No2Component;
  let fixture: ComponentFixture<No2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [No2Component, GoBackBtnComponent, ErrorComponent],
      imports: [HttpClientModule, NgChartsModule ],
      providers: [MainService]
    });
    fixture = TestBed.createComponent(No2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
