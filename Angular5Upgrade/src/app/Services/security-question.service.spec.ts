import { TestBed, inject } from '@angular/core/testing';

import { SecurityQuestionService } from './security-question.service';

describe('SecurityQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityQuestionService]
    });
  });

  it('should be created', inject([SecurityQuestionService], (service: SecurityQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
