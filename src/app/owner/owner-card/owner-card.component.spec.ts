import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCardComponent } from './owner-card.component';
import { OwnerCardConfig } from '../../ownerCardConfig';

describe('OwnerCardComponent', () => {
  let component: OwnerCardComponent;
  let fixture: ComponentFixture<OwnerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let oc : OwnerCardConfig = {
      owner: [],
      teams: [],
      stats: []
    }
    component.config = oc;
    expect(component).toBeTruthy();
  });
});
