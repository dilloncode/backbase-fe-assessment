import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TransferComponent } from './transfer.component';


@NgModule({
  declarations: [TransferComponent],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    TransferComponent,
  ]
})
export class TransferModule { }
