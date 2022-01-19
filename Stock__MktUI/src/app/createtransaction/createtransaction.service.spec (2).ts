import { TestBed } from '@angular/core/testing';

import { CreatetransactionService } from './createtransaction.service';

describe('CreatetransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatetransactionService = TestBed.get(CreatetransactionService);
    expect(service).toBeTruthy();
  });
});
