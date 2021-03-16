import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {
  modal: any;

  set(modal: any) {
    this.modal = modal;
  }

  remove() {
    this.modal = undefined;
  }

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }
}
