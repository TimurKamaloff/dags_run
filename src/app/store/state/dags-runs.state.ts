import {LoadingStatus} from "../../common-types/loadingStatus";
import {LOADING_STATUSES} from "../../common-constants/loadingStatuses";
import {DagsRunsType} from "../../components/dags-runs/types/dags-runs";


export type InitialDagsRunsStateType = {
  dagsRunsDataLoadingStatus: LoadingStatus,
  dagsRunsData: DagsRunsType[],
}

export const initialDagsRunsState: InitialDagsRunsStateType = {
  dagsRunsDataLoadingStatus: LOADING_STATUSES.default,
  dagsRunsData: [],
}
