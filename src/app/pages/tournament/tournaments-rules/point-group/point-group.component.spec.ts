import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointGroupComponent } from './point-group.component';

describe('PointGroupComponent', () => {
  let component: PointGroupComponent;
  let fixture: ComponentFixture<PointGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
