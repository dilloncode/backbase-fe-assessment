import { MerchantDto } from "../interfaces";

export class Merchant {
  public name: string;
  public accountNumber: string;
  public get image() {
    return `${this.name?.toLowerCase().split(' ').join('-')}.png`;
  }

  constructor(dto: MerchantDto) {
    this.name = dto.name;
    this.accountNumber = dto.accountNumber;
  }
}