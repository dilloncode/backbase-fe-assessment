import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="card">
      <div class="card-title">
        <img *ngIf="icon" src="../../../../assets/icons/{{icon}}.png" [alt]="icon" />
        <span class="title-text">{{title}}</span>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() title?: string;
  @Input() icon?: string;
}
