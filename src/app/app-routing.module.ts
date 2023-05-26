import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './components/technology/technology.component';
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { FlowComponent } from './components/flow/flow.component';
import { PlanComponent } from './components/plan/plan.component';

const routes: Routes = [
  {path: '', component: StartscreenComponent},
  {path: 'tech', component: TechnologyComponent},
  {path: 'flow', component: FlowComponent},
  {path: 'plan', component: PlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
