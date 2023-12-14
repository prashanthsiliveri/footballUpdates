import { Component } from '@angular/core';
import { CountryList, updatesHeader } from '../types/football-updates.type';
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
    { id: 'englandSelect', name: 'England', code:'', flag:'' },
    { id: 'spainSelect', name: 'Spain', code:'', flag:''  },
    { id: 'germanySelect', name: 'Germany', code:'', flag:''  },
    { id: 'franceSelect', name: 'France', code:'', flag:''  },
    { id: 'italySelect', name: 'Italy', code:'', flag:''  }
  ];
  countryList: Array<CountryList> = [];

  constructor(private route: Router, private mainService: MainService) { }

  ngOnInit(): void {
    this.footballTeamsData = [
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 },
      { series: 1, logo: '', name: 'Manchester', games: 6, won: 3, lost: 2, draw: 1, goalDifference: 1, points: 12 }
    ]

    this.mainService.getCountries().then(response => {
      response.json().then((data: { response: any[]; }) => {
        data.response.forEach(item => {
          if (item.name == 'England' || item.name == 'Spain' || item.name == 'Germany' || item.name == 'France' || item.name == 'Italy') {
            this.countryList.push(item)
          }
        })
      })
    })
    .catch(error => console.log('Error while fetching:', error))

    
  }

  /**
   * selected country data function
   */
  countrySelect(country: CountryList) {
    console.log(country);
    this.mainService.getLeagues().then(response => {
      response.json().then((res: any) => {
        console.log(res)
    }) 
  })
  .catch(error => console.log('Error while fetching:', error))
  }


  /**
   * team click function to get results
   */
  teamClick(team: object) {
    this.route.navigate(['/gameResults'])
  }
}
