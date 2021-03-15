import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './components/card.component';

import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';

import { TypeMapperService } from './services/type-mapper.service';
import { AccountTransactionService } from './services/account-transaction.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    CardComponent,
    CurrencySymbolPipe,
  ],
  providers: [
    CurrencySymbolPipe,
    AccountTransactionService,
    TypeMapperService,
  ],
  exports: [
    // modules
    CommonModule,
    // components
    CardComponent,
    // pipes
    CurrencySymbolPipe,
  ]
})
export class SharedModule { }
