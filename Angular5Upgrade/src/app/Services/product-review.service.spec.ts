import { TestBed, inject } from '@angular/core/testing';

import { ProductReviewService } from './product-review.service';

describe('ProductReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductReviewService]
    });
  });

 /* xit('should be created', inject([ProductReviewService], (service: ProductReviewService) => {
    expect(service).toBeTruthy();
  })); */
});
