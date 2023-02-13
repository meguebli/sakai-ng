import { TestBed } from '@angular/core/testing';

import { RdmtService } from './rdmt.service';

describe('RdmtService', () => {
  let service: RdmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
