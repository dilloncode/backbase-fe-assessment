import { Component } from '@angular/core';
import { AccountTransaction } from './models';
import { Account } from './models/Account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backbase-fe-assessment';
  account: Account = new Account();

  handleTransactionsChange(value: AccountTransaction[]) {
    this.account = new Account(value);
  }
}
