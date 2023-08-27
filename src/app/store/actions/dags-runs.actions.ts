import {Action} from "@ngrx/store";
import {DagsRunsType} from "../../components/dags-runs/types/dags-runs";

export enum DagsRunsActions {
  GetDagsRunsDataRequest = '[dags-runs]: get data request',
  GetDagsRunsDataSuccess = '[dags-runs]: get data success',
  GetDagsRunsDataFail = '[dags-runs]: get data fail',
}

export class GetDagsRunsDataRequest implements Action {
  public readonly type = DagsRunsActions.GetDagsRunsDataRequest;
}

export class GetDagsRunsDataSuccess implements Action {
  public readonly type = DagsRunsActions.GetDagsRunsDataSuccess;

  constructor(public payload: DagsRunsType[]) {}
}

export class GetDagsRunsDataFail implements Action {
  public readonly type = DagsRunsActions.GetDagsRunsDataFail;
}

export type DagsRunsActionsType = GetDagsRunsDataRequest | GetDagsRunsDataSuccess | GetDagsRunsDataFail;
