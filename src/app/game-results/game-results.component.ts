import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent {
  footballTeamsData: any;

  constructor(private route: Router) {
    this.footballTeamsData = [
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12},
      {series: 1, logo: '', name: 'Manchester', games: 6, won : 3, lost: 2, draw: 1, goalDifference: 1, points: 12}
    ]
  }


  /**
   * Back to Dashboard page
   */
  backToDashboard() {
    this.route.navigate(['/dashboard'])
  }
}
