import { TransactionType } from "../enums";
import { TransactionDto } from "../interfaces";
import { AmountCurrency } from "./AmountCurrency";

export class Transaction {
  amountCurrency: AmountCurrency;
  type: string;
  creditDebitIndicator: TransactionType;

  constructor(dto: TransactionDto) {
    this.amountCurrency = new AmountCurrency(dto.amountCurrency);
    this.type = dto.type;
    this.creditDebitIndicator = <TransactionType>dto.creditDebitIndicator;
  }
}