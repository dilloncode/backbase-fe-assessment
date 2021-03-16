import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddTransactionForm } from '../interfaces';
import { CurrencySymbolPipe } from '../shared/pipes/currency-symbol.pipe';
import { ConfirmModalService } from '../shared/services/confirm-modal.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnChanges {
  @Input() accountNumber!: string;
  @Input() accountCurrency!: string;
  @Input() accountBalance!: number;
  @Input() recentMerchants!: string[];
  @Output() addTransaction: EventEmitter<AddTransactionForm> = new EventEmitter<AddTransactionForm>();
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

  resetModel() {
    this.newTransaction = {
      ...this.newTransaction,
      toAccount: null,
      amount: null,
    };
  }

  handleSubmit(isValid: boolean | null) {
    if (isValid && this.newTransaction.amount) {
      this.error = undefined;
      if (this.accountBalance - this.newTransaction.amount < -500) {
        this.error = 'This transfer would overdraw your acccount beyond the limit';
      } else if (this.newTransaction.amount <= 0) {
        this.error = 'The transfer amount must be positive';
      }

      this.modalService.open();
    }
  }

  cancelTransfer() {
    this.modalService.close();
  }

  completeTransfer(form: NgForm) {
    this.addTransaction.emit(this.newTransaction);
    this.modalService.close();
    this.resetModel();
    form.resetForm(this.newTransaction);
  }
}
