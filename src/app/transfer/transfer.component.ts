import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddTransactionForm } from '../interfaces';
import { AccountTransaction } from '../models';
import { CurrencySymbolPipe } from '../shared/pipes/currency-symbol.pipe';
import { ConfirmModalService } from '../shared/services/confirm-modal.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  providers: [CurrencyPipe, CurrencySymbolPipe]
})
export class TransferComponent implements OnChanges {
  @Input() accountNumber!: string;
  @Input() accountCurrency!: string;
  @Input() accountBalance!: number;
  @Input() recentMerchants!: string[];
  @Output() addTransaction: EventEmitter<AddTransactionForm> = new EventEmitter<AddTransactionForm>();
  form: any;
  error?: string;
  noCurrencySymbol: string = '';
  newTransaction!: AddTransactionForm;
  accountName: string = 'Free Checking(4652)';

  constructor(private modalService: ConfirmModalService) { }

  ngOnChanges(changes: any) {
    if ('accountNumber' in changes) {
      this.newTransaction = { fromAccount: changes.accountNumber.currentValue, toAccount: null, amount: null };
    }
  }

  handleSubmit(value: any, isValid: boolean | null) {
    if (isValid) {
      this.error = undefined;
      if (this.accountBalance - value.amount < -5000) {
        this.error = 'This transfer would overdraw your acccount beyond the limit';
      } else if (value.amount < 0) {
        this.error = 'A negative amount is not allowed';
      }

      this.modalService.open();
    }
  }

  cancelTransfer() {
    this.modalService.close();
  }

  completeTransfer(form: NgForm) {
    this.addTransaction.emit(form.value);
    this.modalService.close();
    form.resetForm(this.newTransaction);
  }
}
