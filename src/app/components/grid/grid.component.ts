import { Component, Input } from '@angular/core';
import { GridItem } from 'src/app/interfaces/grid-item';
import { PhonePipe } from 'src/app/pipes/phone.pipe';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() items: GridItem[] = [];

  constructor(private phonePipe: PhonePipe) {}

  getKeys(item: any) {
    const keys = Object.keys(item || {});
    return keys;
  }

  formatValueByKey(value: any, key: string): any {
    if (key === 'phone') {
      return this.phonePipe.transform(value);
    }
    return value;
  }
}
