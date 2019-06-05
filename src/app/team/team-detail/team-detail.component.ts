import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { GameService } from '../../game/game-service/game.service';
import { TeamService } from '../team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { GamesTableComponent } from '../../game/games-table/games-table.component';
import { TeamsTableComponent } from '../teams-table/teams-table.component';
import { Game } from '../../game';
import { SeasonStats } from '../../seasonStats';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  public games: Game[];
  public teamStats: SeasonStats[];

  constructor(
    private gameService: GameService,
    private teamService: TeamService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let teamId = this.route.params["value"]["id"];
    let gamesResponse = this.gameService.getTeamGames(teamId)
    let teamStatsResponse = this.teamService.getTeamSeasonStatsView(teamId)

    forkJoin([gamesResponse, teamStatsResponse]).subscribe(responseList => {
      this.games = responseList[0];
      this.teamStats = [responseList[1]];
    })
  }

}
