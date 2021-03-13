class AccountTransaction {
  categoryCode: string;
  dates: Dates;
  transaction: Transaction;
  merchant: Merchant;

  constructor(dto: IAccountTransactionDto) {
    this.categoryCode = dto.categoryCode;
    this.dates = new Dates(dto.dates);
    this.transaction = new Transaction(dto.transaction);
    this.merchant = new Merchant(dto.merchant);
  }
}