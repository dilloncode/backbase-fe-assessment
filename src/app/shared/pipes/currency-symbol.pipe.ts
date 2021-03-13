import { Pipe, PipeTransform } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {
  static format: 'narrow' = 'narrow';

  transform(value: string):string {
    return getCurrencySymbol(value, CurrencySymbolPipe.format);
  }
}
