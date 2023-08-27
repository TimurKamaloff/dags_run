import {NgModule} from "@angular/core";
import {DagInfoComponent} from "./dag-info.component";
import {DagInfoRoutingModule} from "./dag-info-routing.module";
import {DagInfoContainer} from "./dag-info.container";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    DagInfoContainer,
    DagInfoComponent,
  ],
  imports: [DagInfoRoutingModule, MatIconModule, MatTooltipModule],
  providers: [],
  bootstrap: [],
})
export class DagInfoModule {}
