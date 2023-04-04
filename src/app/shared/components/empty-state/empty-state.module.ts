import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {EmptyStateComponent} from './empty-state.component';

const DECLARATIONS = [EmptyStateComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  exports: DECLARATIONS,
})
export class EmptyStateModule {
}
