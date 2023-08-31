import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Four0fourComponent } from './four0four.component';

describe('Four0fourComponent', () => {
  let component: Four0fourComponent;
  let fixture: ComponentFixture<Four0fourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Four0fourComponent]
    });
    fixture = TestBed.createComponent(Four0fourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
