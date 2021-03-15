import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  getSortFunction(type: string, property: string) {
    switch (type) {
      case 'number':
        return (a: any, b: any) => a[property] - b[property];
      case 'string':
        return (a: any, b: any) => a[property] > b[property] ? 1 : -1;
      default:
        throw new TypeError(`Unknown sort type: ${type}`);
    }
  }

  transform(value: any[], property: string, order: boolean): any[] {
    if (value?.length > 1) {
      const type = typeof value[0][property];
      const sortFn = this.getSortFunction(type, property);
      value.sort(sortFn)
      return order ? value.reverse() : value;
    }

    return value;
  }

}
