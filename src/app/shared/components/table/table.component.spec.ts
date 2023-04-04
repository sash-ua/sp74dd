import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import {Order} from "../../models/order.model";

describe('TableComponent', () => {
  let component: TableComponent<Order>;
  let fixture: ComponentFixture<TableComponent<Order>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
