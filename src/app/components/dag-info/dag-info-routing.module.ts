import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DagInfoComponent} from "./dag-info.component";

const routes: Routes = [
  {
    path: '',
    component: DagInfoComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DagInfoRoutingModule {
}
