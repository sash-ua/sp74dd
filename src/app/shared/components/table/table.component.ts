import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {DictionaryNum} from "@ngrx/entity/src/models";

import {TableColumn} from "../../models/table-column.model";

@Component({
  selector: 'st-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit {
  @Input() data: T[];
  @Input() favoriteIds: DictionaryNum<boolean>;
  @Input() tableConfig: TableColumn[];
  @Input() itemIdColumn: string | number;
  @Input() hasActions = true;

  @Output() addToFavorite = new EventEmitter<number>();
  @Output() removeFromFavorite = new EventEmitter<number>();

  displayedColumns: string[];

  ngOnInit(): void {
    this.displayedColumns = this.tableConfig.map(column => (column.value.id || column.value.fallback)).concat('actions');
  }

  onAddToFavorite(id: number) {
    this.addToFavorite.emit(id);
  }

  onRemoveFromFavorite(id: number) {
    this.removeFromFavorite.emit(id)
  }
}
