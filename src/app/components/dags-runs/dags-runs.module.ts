import {DagsRunsComponent} from "./dags-runs.component";
import {NgModule} from "@angular/core";
import {DagsRunsRoutingModule} from "./dags-runs-routing.module";
import {DagsRunsContainer} from "./dags-runs.container";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import { DagRunItemComponent } from './components/dag-run-item/dag-run-item.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {DagsRunsService} from "../../services/dags-runs.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import { DagRunCreateModalComponent } from './components/dag-run-create-modal/dag-run-create-modal.component';
import {CdkListbox} from "@angular/cdk/listbox";

@NgModule({
  declarations: [DagsRunsComponent, DagsRunsContainer, DagRunItemComponent, DagRunCreateModalComponent],
  imports: [
    DagsRunsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDialogModule,
    DatePipe,
    AsyncPipe,
    NgForOf,
    MatProgressSpinnerModule,
    NgIf,
    CdkListbox,
  ],
  providers: [DagsRunsService],
  bootstrap: [],
})
export class DagsRunsModule {}
