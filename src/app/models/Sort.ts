export class Sort {
  property: string;
  order: boolean;

  constructor(property: string, order: boolean) {
    this.property = property;
    this.order = order;
  }
}