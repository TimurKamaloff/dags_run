import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DagsRunsType } from './types/dags-runs';
import {LoadingStatus} from "../../common-types/loadingStatus";

@Component({
  selector: 'app-dags-runs',
  templateUrl: './dags-runs.component.html',
  styleUrls: ['./dags-runs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagsRunsComponent {
  @Input() dagsRuns: DagsRunsType[] | null;
  @Input() dagsRunsLoadingStatus: LoadingStatus | null;
}
