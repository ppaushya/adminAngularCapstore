import { TestBed } from '@angular/core/testing';

import { MerchantService } from './merchant-service.service';

describe('MerchantServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchantService= TestBed.get(MerchantService);
    expect(service).toBeTruthy();
  });
});
