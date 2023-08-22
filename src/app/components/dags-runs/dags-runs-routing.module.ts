import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DagsRunsComponent} from "./dags-runs.component";

const routes: Routes = [
  {
    path: '',
    component: DagsRunsComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DagsRunsRoutingModule {
}
