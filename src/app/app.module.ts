import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanComponent } from './components/plan/plan.component';
import { FlowComponent } from './components/flow/flow.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StartscreenComponent,
    TechnologyComponent,
    NavbarComponent,
    PlanComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
