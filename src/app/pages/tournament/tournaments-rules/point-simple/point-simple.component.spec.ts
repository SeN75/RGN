import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSimpleComponent } from './point-simple.component';

describe('PointSimpleComponent', () => {
  let component: PointSimpleComponent;
  let fixture: ComponentFixture<PointSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
