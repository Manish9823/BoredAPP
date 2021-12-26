import { TestBed } from '@angular/core/testing';

import { BoredLogicServiceService } from './bored-logic-service.service';

describe('BoredLogicServiceService', () => {
  let service: BoredLogicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredLogicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
