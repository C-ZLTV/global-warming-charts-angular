import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackBtnComponent } from './go-back-btn.component';

describe('GoBackBtnComponent', () => {
  let component: GoBackBtnComponent;
  let fixture: ComponentFixture<GoBackBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoBackBtnComponent]
    });
    fixture = TestBed.createComponent(GoBackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
