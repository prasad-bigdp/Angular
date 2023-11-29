import { TestBed } from '@angular/core/testing';

import { DataArrayService } from './data-array.service';

describe('DataArrayService', () => {
  let service: DataArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
