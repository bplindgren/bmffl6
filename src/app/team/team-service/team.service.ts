import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Season } from '../../season';
import { Team } from '../../team';
import { SeasonStats } from '../../seasonStats';

@Injectable({  providedIn: 'root' })
export class TeamService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTeamRecord(team: number, week: number): Observable<number[]> {
    const url = `${this.baseURL}` + '/teams/record/' + team + '/' + week;
    console.log(url);
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

  getTeamSeasonStatsView(teamId: number): Observable<SeasonStats> {
    const url = `${this.baseURL}` + '/teams/stats/' + teamId;
    return this.http.get<SeasonStats>(url).pipe(
      tap(_ => console.log('team stats received'))
    )
  }

  getOwnerTeamsStatsView(ownerId: number): Observable<SeasonStats[]> {
    const url = `${this.baseURL}` + '/teams/owner/stats/' + ownerId;
    return this.http.get<SeasonStats[]>(url).pipe(
      tap(_ => console.log('owner team stats received'))
    )
  }

  getAllTeamsStatsView(): Observable<SeasonStats[]> {
    const url = `${this.baseURL}` + '/teams/seasonStats';
    return this.http.get<SeasonStats[]>(url).pipe(
      tap(_ => console.log('owner team stats received'))
    )
  }

  getSeasonTeams(seasonId: number): Observable<SeasonStats[]> {
    const url =`${this.baseURL}` + '/teams/getSeasonTeams/' + seasonId;
    return this.http.get<SeasonStats[]>(url).pipe(
      tap(_ => console.log('season teams received'))
    )
  }

}
