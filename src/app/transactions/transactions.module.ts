import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TransactionsComponent } from './transactions.component';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TransactionsComponent,
  ]
})
export class TransactionsModule { }
