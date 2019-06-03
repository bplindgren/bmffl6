import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Game } from '../../game';
import { MatchupStats } from '../../matchupStats';

@Injectable({ providedIn: 'root' })
export class GameService {
  public baseURL = 'https://bmffl-spring-boot.herokuapp.com';

  constructor(private http: HttpClient) { }

  getWeekGames(season: number, week: number): Observable<Game[]> {
    const url = `${this.baseURL}/games/season/${season}/week/${week}`
    return this.http.get<Game[]>(url).pipe(
      tap(_ => console.log('games received'))
    );
  }

  getPlayoffGames(season: number): Observable<Game[]> {
    const url = `${this.baseURL}` + '/games/season/playoffs/' + season
    return this.http.get<Game[]>(url).pipe(
      tap(_ => console.log('games received'))
    );
  }

  getTeamGames(teamId: number): Observable<Game[]> {
    const url = `${this.baseURL}` + '/games/team/' + teamId
    return this.http.get<Game[]>(url).pipe(
      tap(_ => console.log('team games received'))
    );
  }

  getMatchupStats(owner1Id: number, owner2Id: number): Observable<MatchupStats> {
    const url = `${this.baseURL}` + '/games/matchup/' + owner1Id + '/' + owner2Id;
    return this.http.get<MatchupStats>(url).pipe(
      tap(_ => console.log('games received'))
    );
  }

}
