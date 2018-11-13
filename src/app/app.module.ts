import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GameService } from './game.service';
import { TeamService } from './team/team-service/team.service';
import { SeasonService } from './season/season-service/season.service';

import { TeamComponent } from './team/team.component';
import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';

import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatMenuModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    HttpModule, HttpClientModule, NgxChartsModule, AppRoutingModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
    MatGridListModule, MatMenuModule, MatGridListModule, MatTableModule
  ],
  providers: [GameService, TeamService, SeasonService],
  exports: [
    AppComponent,
    TeamComponent,
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
