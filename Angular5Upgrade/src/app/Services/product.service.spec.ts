import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  /* xit('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  })); */
});
