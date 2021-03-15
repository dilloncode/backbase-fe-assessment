
import { AccountTransactionDto } from '../interfaces';
import { Dates } from './Dates';
import { Transaction } from './Transaction';
import { Merchant } from './Merchant';

export class AccountTransaction {
  categoryCode: string;
  dates: Dates;
  transaction: Transaction;
  merchant: Merchant;

  constructor(dto: AccountTransactionDto) {
    this.categoryCode = dto.categoryCode;
    this.dates = new Dates(dto.dates);
    this.transaction = new Transaction(dto.transaction);
    this.merchant = new Merchant(dto.merchant);
  }
}