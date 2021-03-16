import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { TypeMapperService } from './services/type-mapper.service';
import { AccountTransactionService } from './services/account-transaction.service';
import { ConfirmModalService } from './services/confirm-modal.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    CardComponent,
    CurrencySymbolPipe,
    SortByPipe,
    FilterPipe,
    ConfirmModalComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: navigator.language },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
    CurrencySymbolPipe,
    AccountTransactionService,
    TypeMapperService,
    ConfirmModalService,
  ],
  exports: [
    // modules
    CommonModule,
    FormsModule,
    // components
    CardComponent,
    ConfirmModalComponent,
    // pipes
    CurrencySymbolPipe,
    SortByPipe,
    FilterPipe,
  ]
})
export class SharedModule { }
