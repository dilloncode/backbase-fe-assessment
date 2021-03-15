import {
  DatesDto,
  MerchantDto,
  TransactionDto,
} from ".";

export interface AccountTransactionDto {
  categoryCode: string,
  dates: DatesDto,
  transaction: TransactionDto,
  merchant: MerchantDto,
}