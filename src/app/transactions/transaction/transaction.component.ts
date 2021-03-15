import { Component, Input, OnInit } from '@angular/core';
import { AccountTransactionDto } from 'src/app/interfaces';
import { AccountTransaction } from 'src/app/models';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: AccountTransaction | undefined;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
