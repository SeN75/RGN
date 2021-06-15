import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleLeagueComponent } from './battle-league.component';

describe('BattleLeagueComponent', () => {
  let component: BattleLeagueComponent;
  let fixture: ComponentFixture<BattleLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
