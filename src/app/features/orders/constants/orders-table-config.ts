import {TableColumn} from "../../../shared/models/table-column.model";

export const ORDERS_TABLE_CONFIG: TableColumn[] = [
  {value: {id: 'identifier'}, label: 'stms.orders.identifier'},
  {value: {id: 'orderNum'}, label: 'stms.orders.order-number'},
  {value: {id: 'orderName'}, label: 'stms.orders.order-name'},
  {value: {id: 'onHold'}, label: 'stms.orders.on-hold'},
];
