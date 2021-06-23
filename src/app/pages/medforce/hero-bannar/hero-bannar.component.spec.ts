import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannarComponent } from './hero-bannar.component';

describe('HeroBannarComponent', () => {
  let component: HeroBannarComponent;
  let fixture: ComponentFixture<HeroBannarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
