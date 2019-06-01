import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeasonsTableComponent } from './seasons-table.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { RouterTestingModule } from '@angular/router/testing';

describe('SeasonsTableComponent', () => {
  let component: SeasonsTableComponent;
  let fixture: ComponentFixture<SeasonsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        TableModule,
        MatTabsModule,
        MatButtonToggleModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
