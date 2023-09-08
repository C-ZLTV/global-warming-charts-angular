import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Co2Component } from './co2.component';

import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { MainService } from 'src/app/services/main.service';
import { ErrorComponent } from '../error/error.component';
import { GoBackBtnComponent } from '../go-back-btn/go-back-btn.component';

describe('Co2Component', () => {
  let component: Co2Component;
  let fixture: ComponentFixture<Co2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Co2Component, GoBackBtnComponent, ErrorComponent],
      imports: [HttpClientModule, NgChartsModule ],
      providers: [MainService]
    });
    fixture = TestBed.createComponent(Co2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
