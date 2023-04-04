import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'st-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  @Input() public detailedTitle: string;
  @Input() public detailedMessage: string;
}
