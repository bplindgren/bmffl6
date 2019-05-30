import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { Team } from '../../team';
import { AllTimeStats } from '../../allTimeStats';
import { SeasonStats } from '../../seasonStats';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TableModule } from '../../shared-modules/table/table.module';

const statDictionary = {
  "Wins": "wins",
  "Losses": "losses",
  "Ties": "ties",
  "Winning_Percentage": "winningpct",
  "Points_For": "pointsfor",
  "Points_Against": "pointsagainst",
  "Point_Differential": "pointdifferential",
  "Points_For_Per_Game": "pfpg",
  "Points_Against_Per_Game": "papg",
  "PPG_Differential": "ppgdiff"
}

@Component({
  selector: 'stat-card-grid-list',
  templateUrl: './stat-card-grid-list.component.html',
  styleUrls: ['./stat-card-grid-list.component.css']
})
export class StatCardGridListComponent implements OnInit, OnChanges {
  @Input() ownerId: number;
  public allTimeStats: AllTimeStats;
  private ownerTeams: SeasonStats[];
  @Output() evtEmitterStat: EventEmitter<Object> = new EventEmitter();
  @Output() evtEmitterTeams: EventEmitter<SeasonStats[]> = new EventEmitter();
  private statValues;
  private cardStats: string[] = ["Wins", "Losses", "Ties", "Winning_Percentage", "Points_For", "Points_Against", "Point_Differential", "Points_For_Per_Game", "Points_Against_Per_Game", "PPG_Differential"];
  private show: boolean = false;

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService) {
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    let statsResponse = this.ownerService.getOwnerAllTimeStats(this.ownerId);
    let teamResponse = this.teamService.getOwnerTeamsStatsView(this.ownerId);
    forkJoin([statsResponse, teamResponse]).subscribe(responseList => {
      this.allTimeStats = responseList[0];
      this.ownerTeams = responseList[1].sort((a,b) =>
        (a["id"] > b["id"]) ? 1 : ((b["id"] > a["id"]) ? -1 : 0)
      );
      this.evtEmitterTeams.emit(this.ownerTeams);
      this.statValues = this.getCardStats();
      // When component is initialized, show "Wins" as the initial stat
      this.getGraphData("Wins");
    })
  }

  getCardStats(): Object {
    return {
      Wins: this.allTimeStats["wins"],
      Losses: this.allTimeStats["losses"],
      Ties: this.allTimeStats["ties"],
      Winning_Percentage: this.allTimeStats["winningpct"],
      Points_For: this.allTimeStats["pointsfor"],
      Points_Against: this.allTimeStats["pointsagainst"],
      Point_Differential: this.allTimeStats["pointdifferential"],
      Points_For_Per_Game: this.allTimeStats["pfpg"],
      Points_Against_Per_Game: this.allTimeStats["papg"],
      PPG_Differential: this.allTimeStats["ppgdiff"]
    }
  }

  formatKey(str: string): string {
    return str.split("_").join(" ").split(" Percentage").join("%").split(" Per ").join("/");
  }

  getGraphData(stat: string): void {
    let statValues = this.ownerTeams.map(team =>
      ({ "name": team["year"], "value": team[statDictionary[stat]] })
    );
    let sortedValues = statValues.sort((a,b) =>
      (a["name"] > b["name"]) ? 1 : ((b["name"] > a["name"]) ? -1 : 0)
    );
    let emitArray: any[] = [sortedValues, this.formatKey(stat)];
    this.evtEmitterStat.emit(emitArray);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getData();
  }

}
