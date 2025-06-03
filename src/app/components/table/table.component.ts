import { Component, Input } from '@angular/core';
import { PhonePipe } from 'src/app/pipes/phone.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];

  constructor(private phonePipe: PhonePipe) {}

  getKeys(item: any) {
    const keys = Object.keys(item || {});
    return keys
  }

  formatValueByKey(value: any, key: string): any {
    if (key === 'phone') {
      return this.phonePipe.transform(value);
    }
    return value;
  }
}
