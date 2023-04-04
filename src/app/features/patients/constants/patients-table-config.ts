import {TableColumn} from "../../../shared/models/table-column.model";

export const PATIENTS_TABLE_CONFIG: TableColumn[] = [
  {value: {id: 'code', fallback: 'age'}, label: 'stms.orders.code'},
  {value: {id: 'calculatedAge'}, label: 'stms.orders.age'},
  {value: {id: 'fullName'}, label: 'stms.orders.full-name'},
  {value: {id: 'firstName'}, label: 'stms.orders.first-name'},
];
