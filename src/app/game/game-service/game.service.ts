import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Game } from '../../game';
import { MatchupStats } from '../../matchupStats';

@Injectable({ providedIn: 'root' })
export class GameService {
  private baseURL = 'http://localhost:8080';
  private games: Game[] = [];

  constructor(private http: HttpClient) { }

  getWeekGames(seasonId: number, week: number): Observable<Game[]> {
    // const url = `${this.baseURL}` + '/games/season/' + seasonId + '/week/' + week
    const url = `${this.baseURL}/games/season/${seasonId}/week/${week}`
    return this.http.get<Game[]>(url).pipe(
      tap(_ => console.log('games retreived'))
    );
  }

  getPlayoffGames(seasonId: number): Observable<Game[]> {
    const url = `${this.baseURL}` + '/games/season/playoffs/' + seasonId
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
    const url = `${this.baseURL}` + '/games/matchup/' + owner1Id + "/" + owner2Id;
    return this.http.get<MatchupStats>(url).pipe(
      tap(_ => console.log('games received'))
    );
  }

}
