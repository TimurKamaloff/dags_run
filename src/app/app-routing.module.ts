import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DagInfoComponent} from "./components/dag-info/dag-info.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dags-runs'
  },
  {
    path: 'dags-runs',
    loadChildren: () => import('./components/dags-runs/dags-runs.module').then((m) => m.DagsRunsModule)
  },
  {
    path: 'dag-info',
    loadChildren: () => import('./components/dag-info/dag-info.module').then((m) => m.DagInfoModule)
  },
  {
    path: '**',
    redirectTo: 'dags-runs',
  },
  { path: 'first-component', component: DagInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
