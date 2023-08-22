import {DagsRunsComponent} from "./dags-runs.component";
import {NgModule} from "@angular/core";
import {DagsRunsRoutingModule} from "./dags-runs-routing.module";
import {DagsRunsContainer} from "./dags-runs.container";

@NgModule({
  declarations: [
    DagsRunsComponent,
    DagsRunsContainer,
  ],
  imports: [DagsRunsRoutingModule],
  providers: [],
  bootstrap: []
})
export class DagsRunsModule { }
