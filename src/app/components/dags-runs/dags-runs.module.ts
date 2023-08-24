import {DagsRunsComponent} from "./dags-runs.component";
import {NgModule} from "@angular/core";
import {DagsRunsRoutingModule} from "./dags-runs-routing.module";
import {DagsRunsContainer} from "./dags-runs.container";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [DagsRunsComponent, DagsRunsContainer],
  imports: [
    DagsRunsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [],
})
export class DagsRunsModule {}
