import { TestBed, inject } from '@angular/core/testing';

import { ChallengeService } from './challenge.service';

describe('ChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChallengeService]
    });
  });

  /* xit('should be created', inject([ChallengeService], (service: ChallengeService) => {
    expect(service).toBeTruthy();
  })); */
});
