import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule } from "@ngx-translate/core";

import { SharedModule } from "../../../shared/shared.module";

import { OrdersComponent } from "./orders.component";
import {OrdersStateFacade} from "../../../core/orders/orders.facade";
import {BehaviorSubject} from "rxjs";

describe("OrdersComponent", () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  const stubFacade = {
    orders$: new BehaviorSubject([]),
    isLoading$: new BehaviorSubject(false),
    favoriteIds$: new BehaviorSubject({}),
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          SharedModule,
          NoopAnimationsModule,
          TranslateModule.forRoot()
        ],
        declarations: [OrdersComponent],
        providers:[
          {provide: OrdersStateFacade, useValue: stubFacade}
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
