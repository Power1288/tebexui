import { TestBed } from '@angular/core/testing';

import { TebexService } from './tebex.service';

describe('TebexService', () => {
  let service: TebexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TebexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
