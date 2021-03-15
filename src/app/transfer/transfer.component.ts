import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CurrencySymbolPipe } from '../shared/pipes/currency-symbol.pipe';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  providers: [CurrencyPipe, CurrencySymbolPipe]
})
export class TransferComponent {
  @Input() accountCurrency!: string;
  @Input() accountBalance!: number;
  @Input() recentMerchants!: string[];
  noCurrencySymbol: string = '';
}
