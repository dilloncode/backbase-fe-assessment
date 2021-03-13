import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { TransferModule } from './transfer/transfer.module';
import { TransactionsModule } from './transactions/transactions.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TransferModule,
    TransactionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
