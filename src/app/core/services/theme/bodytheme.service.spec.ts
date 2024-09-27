import { TestBed } from '@angular/core/testing';

import { BodythemeService } from './bodytheme.service';

describe('BodythemeService', () => {
  let service: BodythemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodythemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
