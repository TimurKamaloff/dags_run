import {DagsRunsComponent} from "./dags-runs.component";
import {NgModule} from "@angular/core";
import {DagsRunsRoutingModule} from "./dags-runs-routing.module";

@NgModule({
  declarations: [
    DagsRunsComponent,
  ],
  imports: [DagsRunsRoutingModule],
  providers: [],
  bootstrap: []
})
export class DagsRunsModule { }
