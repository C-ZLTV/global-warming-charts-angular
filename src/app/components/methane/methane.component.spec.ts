import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MethaneComponent } from './methane.component';

import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { MainService } from 'src/app/services/main.service';
import { ErrorComponent } from '../error/error.component';
import { GoBackBtnComponent } from '../go-back-btn/go-back-btn.component';

describe('MethaneComponent', () => {
  let component: MethaneComponent;
  let fixture: ComponentFixture<MethaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethaneComponent, GoBackBtnComponent, ErrorComponent],
      imports: [HttpClientModule, NgChartsModule ],
      providers: [MainService]
    });
    fixture = TestBed.createComponent(MethaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
