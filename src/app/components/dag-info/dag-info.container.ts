import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-dag-info-container',
  template: '<app-dag-info></app-dag-info>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagInfoContainer {}