import { TestBed } from '@angular/core/testing';

import { ViewtransactionService } from './viewtransaction.service';

describe('ViewtransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewtransactionService = TestBed.get(ViewtransactionService);
    expect(service).toBeTruthy();
  });
});
