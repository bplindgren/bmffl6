import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GameService } from './game.service';

import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';

import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatMenuModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    HttpModule, HttpClientModule, AppRoutingModule, MatToolbarModule, ChartsModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
    MatGridListModule, MatMenuModule, MatTableModule
  ],
  providers: [GameService],
  exports: [
    AppComponent,
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
