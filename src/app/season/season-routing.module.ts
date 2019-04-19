import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonsComponent
  },
  {
    path: ':id',
    component: SeasonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonRoutingModule { }
