import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { InitialDagsRunsStateType } from '../state/dags-runs.state';

const selectDagsRuns = (state: AppState) => state.dagsRuns;

export const selectDagsRunsData = createSelector(
  selectDagsRuns,
  (state: InitialDagsRunsStateType) => state.dagsRunsData,
);
export const selectDagsRunsDataLoadingStatus = createSelector(
  selectDagsRuns,
  (state: InitialDagsRunsStateType) => state.dagsRunsDataLoadingStatus,
);
