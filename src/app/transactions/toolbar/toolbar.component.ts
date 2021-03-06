import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Sort } from '../../models';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnChanges {
  icon: SafeHtml;
  @Input() searchText!: string;
  @Input() sortDesc!: boolean;
  @Input() sortProperty!: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor(private sanitizer: DomSanitizer) {
    this.icon = sanitizer.bypassSecurityTrustHtml('&#9650;');
  }

  ngOnChanges(changes: any) {
    if ('sortDesc' in changes) {
      this.icon = this.sanitizer.bypassSecurityTrustHtml(changes.sortDesc.currentValue ? '&#9660;' : '&#9650;');
    }
  }

  onSearch(searchText: string) {
    this.search.emit(searchText);
  }

  onSortChange(property: string) {
    const order = this.sortProperty === property ? !this.sortDesc : this.sortDesc;
    const sortEvent = new Sort(property, order);
    this.sort.emit(sortEvent)
  }
}
