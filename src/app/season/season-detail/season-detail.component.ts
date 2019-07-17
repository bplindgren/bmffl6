import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeasonService } from '../season-service/season.service';
import { SeasonStats } from '../../seasonStats';
import { Team } from '../../team';
import { TeamService } from '../../team/team-service/team.service';

@Component({
  selector: 'season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit  {
  public teams: SeasonStats[];
  upstairsTeams: SeasonStats[];
  downstairsTeams: SeasonStats[];
  year: number;
  currentDivision: string = 'upstairs';

  constructor(
    private seasonService: SeasonService,
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.year = (+(params['id']) + 2010);
        this.setTeams(this.year);
      }
    });
  }

  setTeams(seasonId: number): void {
    this.teamService.getSeasonTeams(seasonId-2010).subscribe(teams => {
      this.teams = teams.sort((a,b) =>
        (a["winningpct"] > b["winningpct"]) ? 1 : ((b["winningpct"] > a["winningpct"]) ? -1 : 0)
      ).reverse()

      this.upstairsTeams = this.getDivisionTeams('upstairs');
      this.downstairsTeams = this.getDivisionTeams('downstairs');
    })
  }

  getDivisionTeams(division: string): SeasonStats[] {
    return this.teams.filter(team =>
      team.division === division)
      .sort((a,b) =>
      (a["standing"] > b["standing"]) ? 1 : ((b["standing"] > a["standing"]) ? -1 : 0)
    )
  }

  changeDivision(e: String): void {
    this.currentDivision = e["value"];
  }

}
