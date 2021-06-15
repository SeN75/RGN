import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleExclusionComponent } from './battle-exclusion.component';

describe('BattleExclusionComponent', () => {
  let component: BattleExclusionComponent;
  let fixture: ComponentFixture<BattleExclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleExclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
