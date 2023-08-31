import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethaneComponent } from './methane.component';

describe('MethaneComponent', () => {
  let component: MethaneComponent;
  let fixture: ComponentFixture<MethaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethaneComponent]
    });
    fixture = TestBed.createComponent(MethaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
