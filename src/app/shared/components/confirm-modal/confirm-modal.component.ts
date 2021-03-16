import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { ConfirmModalService } from '../../services/confirm-modal.service';

@Component({
  selector: 'app-confirm-modal',
  styleUrls: ['./confirm-modal.component.scss'],
  template: `
    <div class="confirm-modal">
      <app-card [title]="title" [icon]="icon">
        <ng-content></ng-content>
      </app-card>
    </div>
    <div class="confirm-modal-background"></div>
  `
})
export class ConfirmModalComponent implements OnInit, OnDestroy {
  private element: any;
  @Input() title: string = 'Confirm';
  @Input() icon?: string;
  constructor(private modalService: ConfirmModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
      if (el.target.className === 'confirm-modal') {
        this.close();
      }
    })

    this.modalService.set(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove();
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
