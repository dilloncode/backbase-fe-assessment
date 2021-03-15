import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountTransaction } from '../../models/AccountTransaction';
import { AccountTransactionDto } from 'src/app/interfaces';
import { TypeMapperService } from './type-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionService {
  constructor(private http: HttpClient, private typeMapper: TypeMapperService) { }

  getAccountTransactions(): Observable<AccountTransaction[]> {
    return this.http
      .get<AccountTransactionDto[]>('/assets/transactions.json')
      .pipe(
        map((result: any) => this.typeMapper
          .mapArrayToType<AccountTransaction>(AccountTransaction, result.data))
      );
  }
}
