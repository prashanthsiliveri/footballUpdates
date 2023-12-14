import { Component } from '@angular/core';
import { updatesHeader } from '../types/football-updates.type';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-football-updates-dashboard',
  templateUrl: './football-updates-dashboard.component.html',
  styleUrls: ['./football-updates-dashboard.component.css']
})
export class FootballUpdatesDashboardComponent {
  footballTeamsData: Array<updatesHeader> = [];
  countries = [
    {id: 'englandSelect', name:'England'},
    {id: 'spainSelect', name:'Spain'},
    {id: 'germanySelect', name:'Germany'},
    {id: 'franceSelect', name:'France'},
    {id: 'italySelect', name:'Italy'}
  ];

  constructor(private route: Router, private mainService:MainService) { }

  ngOnInit(): void {
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
   * selected country data function
   */
  countrySelect(country:any) {
    console.log(country);
  }


  /**
   * team click function to get results
   */
  teamClick(team:object) {
    this.route.navigate(['/gameResults'])
  }
}
