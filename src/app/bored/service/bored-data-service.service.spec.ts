import { TestBed } from '@angular/core/testing';

import { BoredDataServiceService } from './bored-data-service.service';

describe('BoredDataServiceService', () => {
  let service: BoredDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
