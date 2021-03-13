class Dates {
  private _valueDate!: Date;
  // private _dateDisplay: string = '';

  public set valueDate(value: Date) {
    // this._dateDisplay = value.toLocaleString();
    this._valueDate = value;
  }

  public get valueDate(): Date {
    return this._valueDate;
  }

  // public get dateDisplay(): string {
  //   return this._dateDisplay;
  // }

  constructor(dto: IDatesDto) {
    this.valueDate = dto?.valueDate
      ? new Date(dto.valueDate)
      : new Date();
  }
}