import { AmountCurrencyDto } from ".";

export interface TransactionDto {
  amountCurrency: AmountCurrencyDto,
  type: string,
  creditDebitIndicator: string,
}