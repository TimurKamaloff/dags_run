import {Injectable} from "@angular/core";
import {delay, Observable, of, switchMap} from "rxjs";
import {DagsRunsType} from "../components/dags-runs/types/dags-runs";

@Injectable()
export class DagsRunsService {
  public getDagsRuns(): Observable<DagsRunsType[]> {
    const dags: DagsRunsType[] = [];
    for (let i = 0; i < 15; i++) {
      dags.push({
        name: 'dag ' + i,
        user: 'user ' + i,
        failedRunsCount: i * 2,
        successRunsCount: i * 3,
        schedule: 'Daily',
        lastRunDate: new Date(Math.random() * 10 * 2000000000000),
      })
    }
    return of(null).pipe(
      delay(5000),
      switchMap(() => of(dags))
    );
  }
}
