import { TestBed } from '@angular/core/testing';

import { RobinsSuperTollerService } from './robins-super-toller.service';

describe('RobinsSuperTollerService', () => {
  let service: RobinsSuperTollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobinsSuperTollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
