import { TestBed } from '@angular/core/testing';

import { VillaServiceService } from './villa-service.service';

describe('VillaServiceService', () => {
  let service: VillaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
