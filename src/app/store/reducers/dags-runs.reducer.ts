import {
  initialDagsRunsState,
  InitialDagsRunsStateType,
} from '../state/dags-runs.state';
import {
  DagsRunsActions,
  DagsRunsActionsType,
} from '../actions/dags-runs.actions';
import { LOADING_STATUSES } from '../../common-constants/loadingStatuses';

export const dagsRunsReducer = (
  state = initialDagsRunsState,
  action: DagsRunsActionsType,
): InitialDagsRunsStateType => {
  switch (action.type) {
    case DagsRunsActions.GetDagsRunsDataRequest:
      return {
        ...state,
        dagsRunsDataLoadingStatus: LOADING_STATUSES.loading,
      };

    case DagsRunsActions.GetDagsRunsDataSuccess:
      return {
        ...state,
        dagsRunsDataLoadingStatus: LOADING_STATUSES.loaded,
        dagsRunsData: action.payload
      };

    default:
      return state;
  }
};
