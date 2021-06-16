import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedforceComponent } from './medforce.component';

describe('MedforceComponent', () => {
  let component: MedforceComponent;
  let fixture: ComponentFixture<MedforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedforceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
