import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TransactionsComponent } from './transactions.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TransactionsComponent,
    TransactionComponent
  ]
})
export class TransactionsModule { }
