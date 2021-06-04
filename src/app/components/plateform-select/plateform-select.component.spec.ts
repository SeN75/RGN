import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformSelectComponent } from './plateform-select.component';

describe('PlateformSelectComponent', () => {
  let component: PlateformSelectComponent;
  let fixture: ComponentFixture<PlateformSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateformSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateformSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
