import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DagsRunsType } from '../../types/dags-runs';

@Component({
  selector: 'app-dag-run-item',
  templateUrl: './dag-run-item.component.html',
  styleUrls: ['./dag-run-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagRunItemComponent {
  @Input() dag: DagsRunsType;
}
