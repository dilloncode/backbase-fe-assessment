import { Component, OnInit } from '@angular/core';
import { Sort } from '../models';
import { AccountTransaction } from '../models';
import { AccountTransactionService } from '../shared/services/account-transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  data: AccountTransaction[] = [];
  transactions: AccountTransaction[] = [];
  searchText: string = '';
  sortProperty: string = 'date';
  sortOrder: boolean = false;
  constructor(private accountTransactionsService: AccountTransactionService) { }

  ngOnInit(): void {
    this.accountTransactionsService
      .getAccountTransactions()
      .subscribe((data: any) => {
        this.data = data;
        this.transactions = data;
      });
  }

  handleSortChange(value: Sort) {
    this.sortProperty = value.property;
    this.sortOrder = value.order;
  }

  handleSearchChange(searchText: string) {
    this.searchText = searchText;
  }
}
