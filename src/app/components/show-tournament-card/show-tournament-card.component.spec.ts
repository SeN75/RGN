import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTournamentCardComponent } from './show-tournament-card.component';

describe('ShowTournamentCardComponent', () => {
  let component: ShowTournamentCardComponent;
  let fixture: ComponentFixture<ShowTournamentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTournamentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTournamentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
