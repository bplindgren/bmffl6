import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';

import { Owner } from '../owner';
import { OwnerService } from './owner-service/owner.service';

import { OwnersComponent } from './owners/owners.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerDetailResolver } from './owner-detail/owner-detail.resolver';
import { OwnerCardComponent } from './owner-card/owner-card.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { StatCardComponent } from './stat-card/stat-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatCardGridListComponent } from './stat-card-grid-list/stat-card-grid-list.component';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule
  ],
  declarations: [
    OwnersComponent,
    OwnerDetailComponent,
    OwnerCardComponent,
    StatCardComponent,
    StatCardGridListComponent
  ],
  providers: [OwnerService, OwnerDetailResolver]
})
export class OwnerModule { }
