import { TestBed } from '@angular/core/testing';

import { BrasilapiService } from './brasilapi.service';

describe('Brasilapi', () => {
  let service: BrasilapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrasilapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
