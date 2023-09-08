import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcticComponent } from './arctic.component';

import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { MainService } from 'src/app/services/main.service';
import { ErrorComponent } from '../error/error.component';
import { GoBackBtnComponent } from '../go-back-btn/go-back-btn.component';

describe('ArcticComponent', () => {
  let component: ArcticComponent;
  let fixture: ComponentFixture<ArcticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcticComponent, ErrorComponent, GoBackBtnComponent],
      imports: [HttpClientModule, NgChartsModule],
      providers: [MainService]
    });
    fixture = TestBed.createComponent(ArcticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
