class Transaction {
  amountCurrency: AmountCurrency;
  type: string;
  creditDebitIndicator: string;

  constructor(dto: ITransactionDto) {
    this.amountCurrency = new AmountCurrency(dto.amountCurrency);
    this.type = dto.type;
    this.creditDebitIndicator = dto.creditDebitIndicator;
  }
}