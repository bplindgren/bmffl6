import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Team } from '../../team';

@Injectable({  providedIn: 'root' })
export class TeamService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTeamRecord(team: number, week: number): Observable<number[]> {
    const url = `${this.baseURL}` + '/teams/record/' + team + '/' + week;
    return this.http.get<number[]>(url).pipe(
      tap(_ => console.log('teams records retrieved'))
    )
  }

  getAllTeams(): Observable<Team[]> {
    const url = `${this.baseURL}` + '/teams';
    return this.http.get<Team[]>(url).pipe(
      tap(_ => console.log('all teams fetched'))
    )
  }

  getOwnerTeams(ownerID: number): Observable<Team[]> {
    const url = `${this.baseURL}` + '/teams/owner/' + ownerID;
    return this.http.get<Team[]>(url).pipe(
      tap(_ => console.log('owner teams received'))
    )
  }

  getOwnerTeamsStatsView(ownerID: number): Observable<SeasonStats> {
    const url = `${this.baseURL}` + '/teams/owner/stats/' + ownerID;
    return this.http.get<TeamStats[]>(url).pipe(
      tap(_ => console.log('owner team stats received'))
    )
  }

}
