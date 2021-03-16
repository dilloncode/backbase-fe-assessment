import { AmountCurrencyDto } from "../interfaces";

export class AmountCurrency {
  private _amount!: number | null;
  public currencyCode: string;

  public set amount(value: number | null) {
    this._amount = value;
  }

  public get amount(): number | null {
    return this._amount;
  }

  constructor(dto?: AmountCurrencyDto) {
    this.amount = Number(dto?.amount) || null;
    this.currencyCode = dto?.currencyCode ?? 'USD';
  }
}