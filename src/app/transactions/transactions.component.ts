import { Component, OnInit } from '@angular/core';
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
  constructor(private accountTransactionsService: AccountTransactionService) { }

  ngOnInit(): void {
    this.accountTransactionsService
      .getAccountTransactions()
      .subscribe((data: any) => {
        this.data = data;
        this.transactions = data;
      });
  }

  searchTranasactions(searchText: string) {
    this.transactions = searchText
      ? this.data.filter(t => t.merchant.name.toLowerCase().includes(searchText.toLowerCase()))
      : this.data;
  }
}
