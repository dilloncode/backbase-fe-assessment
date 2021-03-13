import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencySymbolPipe } from '../shared/pipes/currency-symbol.pipe';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  providers: [CurrencyPipe, CurrencySymbolPipe]
})
export class TransferComponent implements OnInit {
  currencySymbol: string;
  placeholder: string;
  constructor(currency: CurrencyPipe,currencySymbol: CurrencySymbolPipe) { 
    this.currencySymbol = currencySymbol.transform("EUR");
    this.placeholder = currency.transform(0, "EUR",'', undefined, navigator.language) ?? "0.00";
  }

  ngOnInit(): void {
  }

}
