import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballUpdatesDashboardComponent } from './football-updates-dashboard/football-updates-dashboard.component';
import { GameResultsComponent } from './game-results/game-results.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: FootballUpdatesDashboardComponent
  },
  {
    path: 'gameResults',
    component: GameResultsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
