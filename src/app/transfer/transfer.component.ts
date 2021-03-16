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
  providers: [CurrencyPipe, CurrencySymbolPipe]
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

  handleSubmit(values: AddTransactionForm, isValid: boolean | null) {
    if (isValid && values.amount) {
      this.error = undefined;
      if (this.accountBalance - values.amount < -500) {
        this.error = 'This transfer would overdraw your acccount beyond the limit';
      } else if (values.amount <= 0) {
        this.error = 'The transfer amount must be positive';
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
