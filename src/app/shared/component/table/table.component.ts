import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';
import { TableColumnDirective } from './directives/table-column.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [CommonModule]
})
export class TableComponent {
  @Input() dataset: any[] = [];

  @ContentChildren(TableColumnDirective)
  columns!: QueryList<TableColumnDirective>;
}
