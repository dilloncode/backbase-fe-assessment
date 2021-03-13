interface IAccountTransactionDto {
  categoryCode: string,
  dates: IDatesDto,
  transaction: ITransactionDto,
  merchant: IMerchantDto,
}