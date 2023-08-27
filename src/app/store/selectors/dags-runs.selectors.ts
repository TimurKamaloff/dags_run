import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { InitialDagsRunsStateType } from '../state/dags-runs.state';

const selectDagsRuns = (state: AppState) => state.dagsRuns;

export const selectDagsRunsDataLoadingStatus = createSelector(
  selectDagsRuns,
  (state: InitialDagsRunsStateType) => state.dagsRunsDataLoadingStatus,
);

export const selectFiltersConfig = createSelector(
  selectDagsRuns,
  (state: InitialDagsRunsStateType) => state.filtersConfig,
);

export const selectDagsRunsData = createSelector(
  selectDagsRuns,
  selectFiltersConfig,
  (state: InitialDagsRunsStateType, filtersConfig) => {
    console.log({ filtersConfig, state });
    let result = filtersConfig.selectedDagsStatus === 2
      ? state.dagsRunsData
      : state.dagsRunsData.filter(
        ({ status }) => status === filtersConfig.selectedDagsStatus,
      );
    if (filtersConfig?.nameSearchString) {
      result = result.filter(({name}) => name.includes(filtersConfig.nameSearchString))
    }
    return result;
  },
);
