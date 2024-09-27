import { TestBed } from '@angular/core/testing';

import { SkillslistService } from './skillslist.service';

describe('SkillslistService', () => {
  let service: SkillslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
