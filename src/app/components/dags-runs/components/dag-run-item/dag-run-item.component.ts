import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { DagsRunsType } from '../../types/dags-runs';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {ChangeDagStatusType} from "../../types/change-dag-status.type";

@Component({
  selector: 'app-dag-run-item',
  templateUrl: './dag-run-item.component.html',
  styleUrls: ['./dag-run-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagRunItemComponent {
  @Input() dag: DagsRunsType;

  @Output() changeDagStatus = new EventEmitter<ChangeDagStatusType>();

  public onChangeDagStatus(event: MatSlideToggleChange): void {
    this.changeDagStatus.emit({dagId: this.dag.id, dagStatus: +event.checked})
  }
}
