import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DagsRunsType } from './types/dags-runs';
import { DagsRunsService } from '../../services/dags-runs.service';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { GetDagsRunsDataRequest } from '../../store/actions/dags-runs.actions';
import {selectDagsRunsData, selectDagsRunsDataLoadingStatus} from "../../store/selectors/dags-runs.selectors";
import {LoadingStatus} from "../../common-types/loadingStatus";

@Component({
  selector: 'app-dag-info-container',
  template: '<app-dags-runs [dagsRuns]="dagsRuns$ | async" [dagsRunsLoadingStatus]="dagsRunsLoadingStatus$ | async"></app-dags-runs>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagsRunsContainer implements OnInit {
  public dagsRuns$: Observable<DagsRunsType[]>;
  public dagsRunsLoadingStatus$: Observable<LoadingStatus>;

  constructor(
    private dagsRunsService: DagsRunsService,
    private store: Store<AppState>,
  ) {}
  public ngOnInit(): void {
    this.dagsRuns$ = this.store.pipe(select(selectDagsRunsData));
    this.dagsRunsLoadingStatus$ = this.store.pipe(select(selectDagsRunsDataLoadingStatus));
    this.store.dispatch(new GetDagsRunsDataRequest());
  }
}
