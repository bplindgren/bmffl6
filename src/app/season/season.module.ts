import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonRoutingModule } from './season-routing.module';

import { SeasonService } from './season-service/season.service';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { SeasonsTableComponent } from './seasons-table/seasons-table.component';

import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    SeasonRoutingModule,
    MatTableModule,
    TableModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  declarations: [SeasonsComponent, SeasonDetailComponent, SeasonsTableComponent],
  providers: [SeasonService]
})
export class SeasonModule { }
