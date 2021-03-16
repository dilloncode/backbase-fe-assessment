import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sort } from '../models';
import { AccountTransaction } from '../models';
import { AccountTransactionService } from '../shared/services/account-transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: AccountTransaction[] = [];
  @Output() transactionChange: EventEmitter<AccountTransaction[]> = new EventEmitter<AccountTransaction[]>()
  searchText: string = '';
  sortProperty: string = 'date';
  sortDesc: boolean = true;
  constructor(private accountTransactionsService: AccountTransactionService) { }

  ngOnInit(): void {
    this.accountTransactionsService
      .getAccountTransactions()
      .subscribe((data: any) => {
        this.transactionChange.emit(data);
      });
  }

  handleSortChange(value: Sort) {
    this.sortProperty = value.property;
    this.sortDesc = value.order;
  }

  handleSearchChange(searchText: string) {
    this.searchText = searchText;
  }
}
