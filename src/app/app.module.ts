import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballUpdatesDashboardComponent } from './football-updates-dashboard/football-updates-dashboard.component';
import { GameResultsComponent } from './game-results/game-results.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballUpdatesDashboardComponent,
    GameResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
