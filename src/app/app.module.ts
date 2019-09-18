import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';

import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatMenuModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { StandingsComponent } from './standings/standings.component';

import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// import { RankingsComponent } from './rankings/rankings.component';
// import { SmackboardComponent } from './smackboard/smackboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StandingsComponent
    // RankingsComponent,
    // SmackboardComponent
  ],
  imports: [
    LayoutModule, BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    HttpModule, HttpClientModule, ChartsModule, AppRoutingModule, MatCardModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    MatGridListModule, MatMenuModule, MatTableModule, CdkTableModule, MatPaginatorModule, MatSortModule
  ],
  exports: [
    AppComponent,
    MenuComponent,
    StandingsComponent
    // RankingsComponent,
    // SmackboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
