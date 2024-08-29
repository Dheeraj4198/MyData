import { TestBed } from '@angular/core/testing';

import { VillaNumberService } from './villa-number.service';

describe('VillaNumberService', () => {
  let service: VillaNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillaNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
