import { TestBed } from '@angular/core/testing';

import { ContaktService } from './contakt.service';

describe('ContaktService', () => {
  let service: ContaktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
