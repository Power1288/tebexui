import { TestBed } from '@angular/core/testing';

import { BlanchisseurService } from './blanchisseur.service';

describe('BlanchisseurService', () => {
  let service: BlanchisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlanchisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
