import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card.component';

import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CurrencySymbolPipe,
  ],
  providers: [
    CurrencySymbolPipe,
  ],
  exports: [
    // modules
    CommonModule,
    // components
    CardComponent,
    // pipes
    CurrencySymbolPipe
  ]
})
export class SharedModule { }
