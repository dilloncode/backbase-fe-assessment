import { Pipe, PipeTransform } from '@angular/core';
import { AccountTransaction } from 'src/app/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (value?.length && searchText) {
      return value.filter((t: AccountTransaction) =>
        t.beneficiary.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    }

    return value;
  }
}
