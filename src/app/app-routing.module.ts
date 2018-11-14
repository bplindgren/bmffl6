import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { MatMenuModule } from '@angular/material';

import { WeekScoresModule } from './week-scores/week-scores.module';
import { OwnerModule } from './owner/owner.module';
import { SeasonModule } from './season/season.module';
import { TeamModule } from './team/team.module';

import { HomeComponent } from './home/home.component'
import { MatchupComponent } from './matchup/matchup.component';
import { RecordsComponent } from './records/records.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'scores',
    loadChildren: './week-scores/week-scores.module#WeekScoresModule'
  },
  {
    path: 'owners',
    loadChildren: './owner/owner.module#OwnerModule'
  },
  {
    path: 'seasons',
    loadChildren: './season/season.module#SeasonModule'
  },
  {
    path: 'teams',
    loadChildren: './team/team.module#TeamModule'
  },
  { path: 'matchup', component: MatchupComponent },
  { path: 'records', component: RecordsComponent }
]

@NgModule({
  declarations: [ HomeComponent, MatchupComponent, RecordsComponent ],
  imports: [ OwnerModule, MatMenuModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
