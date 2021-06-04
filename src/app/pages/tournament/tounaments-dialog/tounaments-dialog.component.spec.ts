import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TounamentsDialogComponent } from './tounaments-dialog.component';

describe('TounamentsDialogComponent', () => {
  let component: TounamentsDialogComponent;
  let fixture: ComponentFixture<TounamentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TounamentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TounamentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
