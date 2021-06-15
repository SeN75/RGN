import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsRulesComponent } from './tournaments-rules.component';

describe('TournamentsRulesComponent', () => {
  let component: TournamentsRulesComponent;
  let fixture: ComponentFixture<TournamentsRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
