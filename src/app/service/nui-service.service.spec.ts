import { TestBed } from '@angular/core/testing';

import { NuiServiceService } from './nui-service.service';

describe('NuiServiceService', () => {
  let service: NuiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
