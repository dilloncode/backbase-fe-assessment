class Merchant {
  name: string;
  accountNumber: string;

  constructor(dto: IMerchantDto) {
    this.name = dto.name;
    this.accountNumber = dto.accountNumber;
  }
}