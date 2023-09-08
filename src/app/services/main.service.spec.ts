import { TestBed } from '@angular/core/testing';
import { MainService } from './main.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('MainService', () => {
  let service: MainService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MainService]
    });
    service = TestBed.inject(MainService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
