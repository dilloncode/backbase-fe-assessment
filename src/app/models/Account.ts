import { TransactionType } from "../enums";
import { AccountTransactionDto, AddTransactionForm } from "../interfaces";
import { AccountTransaction } from "./AccountTransaction";

export class Account {
  private _accountTransactions: AccountTransaction[] = [];
  private _accountNumber: string = '';
  private _accountCurrency: string = 'USD';
  private _accountBalance: number = 0;
  private _recentMerchants: string[] = [];
  newTransaction!: AccountTransaction;

  public set accountTransactions(value: AccountTransaction[]) {
    if (value?.length) {
      const firstTransaction = value[0];
      this._accountNumber = firstTransaction.merchant.accountNumber;
      this._accountCurrency = firstTransaction.transaction.amountCurrency.currencyCode;
      this._accountBalance = value.reduce((sum, transaction) => sum += transaction.amount, 0);
      this._recentMerchants = value.filter(t => t.transaction.creditDebitIndicator === TransactionType.Debit).map(t => t.merchant.name);
    }
    this._accountTransactions = value;
  }

  public get accountTransactions() {
    return this._accountTransactions
  }

  public get accountNumber() {
    return this._accountNumber;
  }

  public get accountCurrency() {
    return this._accountCurrency;
  }

  public get accountBalance() {
    return this._accountBalance;
  }

  public get recentMerchants() {
    return this._recentMerchants;
  }

  constructor(accountTransactions: AccountTransaction[] = []) {
    this.accountTransactions = accountTransactions;
  }

  createNewTransaction(values: AddTransactionForm): AccountTransaction {
    const newValues: AccountTransactionDto = {
      categoryCode: '#ccc;',
      merchant: {
        name: values.toAccount ?? '',
        accountNumber: this.accountNumber,
      },
      dates: {
        valueDate: new Date().getTime(),
      },
      transaction: {
        amountCurrency: {
          amount: values.amount,
          currencyCode: this.accountCurrency,
        },
        type: 'Online Transfer',
        creditDebitIndicator: TransactionType.Debit,
      },
    };

    return new AccountTransaction(newValues);
  }
}