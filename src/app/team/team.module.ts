import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Team } from '../team';
import { TeamService } from './team-service/team.service';

import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
// import { NglTeamsTableComponent } from './ngl-teams-table/ngl-teams-table.component';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    HttpClientModule,
    MatTableModule,
    TableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  declarations: [TeamsComponent, TeamDetailComponent], //, NglTeamsTableComponent],
  providers: [TeamService]
})
export class TeamModule { }
