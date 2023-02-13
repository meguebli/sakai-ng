import { TestBed } from '@angular/core/testing';

import { OfabricationService } from './ofabrication.service';

describe('OfabricationService', () => {
  let service: OfabricationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfabricationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
