import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AccountTransactionService } from './account-transaction.service';

describe('AccountTransactionService', () => {
  let service: AccountTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AccountTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
