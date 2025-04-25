import { Component, Input } from '@angular/core';
import { GridItem } from 'src/app/interfaces/grid-item';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() items: GridItem[] = [];

  getKeys(item: any) {
    const keys = Object.keys(item || {});
    console.log(keys)
    return keys
  }
}
