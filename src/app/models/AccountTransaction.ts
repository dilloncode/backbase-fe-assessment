
import { AccountTransactionDto } from '../interfaces';
import { Dates } from './Dates';
import { Transaction } from './Transaction';
import { Merchant } from './Merchant';
import { TransactionType } from '../enums';

export class AccountTransaction {
  categoryCode: string;
  dates: Dates;
  transaction: Transaction;
  merchant: Merchant;

  get date() {
    return this.dates.valueDate.getTime();
  }

  get beneficiary() {
    return this.merchant.name;
  }

  get amount() {
    const multiplier = this.transaction.creditDebitIndicator === TransactionType.Debit ? -1 : 1;
    return (this.transaction.amountCurrency.amount || 0) * multiplier;
  }

  constructor(dto?: AccountTransactionDto) {
    const categoryDefault = '#ccc';
    this.categoryCode = dto?.categoryCode || categoryDefault;
    this.dates = new Dates(dto?.dates);
    this.transaction = new Transaction(dto?.transaction);
    this.merchant = new Merchant(dto?.merchant);
  }

}