import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOptions = new Headers();
headerOptions.append('x-rapidapi-host', 'v3.football.api-sports.io');
headerOptions.append('x-rapidapi-key', '13534241943ba073f869c6419d8d6511')

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getCountries(): Promise<any> {
    const apiUrl = 'https://v3.football.api-sports.io/countries';
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '13534241943ba073f869c6419d8d6511',
      },
    })
    
  }

  getLeagues(): Promise<any> {
    const apiUrl = 'https://v3.football.api-sports.io/leagues';
    return fetch(apiUrl, {
      method: "GET",
      
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '13534241943ba073f869c6419d8d6511',
      },
    })
  }


  // getCountries(): Observable<any> {
  //   const apiUrl = 'https://v3.football.api-sports.io/countries';
  //   return this.http.get(apiUrl)

  // }
}
