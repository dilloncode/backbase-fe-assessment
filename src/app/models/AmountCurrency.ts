class AmountCurrency {
  private _amount!: number;
  public currencyCode: string;

  public set amount(value: number) {
    this._amount = value || 0;
  }

  public get amount(): number {
    return this._amount;
  }

  constructor(dto: IAmountCurrencyDto) {
    this.amount = Number(dto?.amount);
    this.currencyCode = dto?.currencyCode ?? 'USD';
  }
}