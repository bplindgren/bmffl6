import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Team } from '../../team';
import { TeamService } from '../team-service/team.service';
import { TeamsTableComponent } from '../teams-table/teams-table.component';
import { SeasonStats } from '../../seasonStats';

import { Owner } from '../../owner';
import { OwnerService } from '../../owner/owner-service/owner.service';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  private owners: Owner[];
  private allTeams: SeasonStats[];
  public displayedTeams: SeasonStats[];
  public currentDisplay: string = "allTeams";

  @ViewChild("ownerButton") ownerMatToggle: ElementRef;
  years: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];

  constructor(
    private teamService: TeamService,
    private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.teamService.getAllTeamsStatsView().subscribe(teams => {
      this.allTeams = teams;
      this.displayedTeams = this.allTeams;
      console.log(this.displayedTeams);
    })
    this.ownerService.getAllOwners().subscribe(owners => {
      this.owners = owners;
    })
  }

  getAllTeams(): void {
    this.displayedTeams = this.allTeams;
    this.currentDisplay = "allTeams";
  }

  showOwnerForm(): void {
    this.currentDisplay = "teamsByOwner";
  }

  getTeamsByOwner(e: Object): void {
    console.log(e);
    this.teamService.getOwnerTeamsStatsView(e["value"]).subscribe(teams => {
      this.displayedTeams = teams;
    })
  }

  showSeasonForm(): void {
    this.currentDisplay = "teamsBySeason";
  }

  getTeamsBySeason(e: Object): void {
    let id = +e["value"] - 2010;
    this.teamService.getSeasonTeams(id).subscribe(teams => {
      this.displayedTeams = teams;
    })
  }

  sortTeams(teams: SeasonStats[], prop: string): SeasonStats[] {
    return teams.sort((a,b) =>
      (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
  }

}
