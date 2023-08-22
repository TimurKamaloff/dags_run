import {NgModule} from "@angular/core";
import {DagInfoComponent} from "./dag-info.component";
import {DagInfoRoutingModule} from "./dag-info-routing.module";
import {DagInfoContainer} from "./dag-info.container";

@NgModule({
  declarations: [
    DagInfoContainer,
    DagInfoComponent,
  ],
  imports: [DagInfoRoutingModule],
  providers: [],
  bootstrap: [],
})
export class DagInfoModule {}
