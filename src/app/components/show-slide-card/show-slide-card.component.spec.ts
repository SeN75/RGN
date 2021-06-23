import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSlideCardComponent } from './show-slide-card.component';

describe('ShowSlideCardComponent', () => {
  let component: ShowSlideCardComponent;
  let fixture: ComponentFixture<ShowSlideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSlideCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSlideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
