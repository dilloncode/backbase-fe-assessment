import { DatesDto } from "../interfaces";

export class Dates {
  private _valueDate!: Date;

  public set valueDate(value: Date) {
    this._valueDate = value;
  }

  public get valueDate(): Date {
    return this._valueDate;
  }

  constructor(dto?: DatesDto) {
    this.valueDate = dto?.valueDate
      ? new Date(dto.valueDate)
      : new Date();
  }
}