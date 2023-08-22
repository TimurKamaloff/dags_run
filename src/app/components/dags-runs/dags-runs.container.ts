import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-dag-info-container',
  template: '<app-dags-runs></app-dags-runs>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagsRunsContainer {}
