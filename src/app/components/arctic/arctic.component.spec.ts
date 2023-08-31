import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcticComponent } from './arctic.component';

describe('ArcticComponent', () => {
  let component: ArcticComponent;
  let fixture: ComponentFixture<ArcticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcticComponent]
    });
    fixture = TestBed.createComponent(ArcticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
