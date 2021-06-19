import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRuleAlertComponent } from './remove-rule-alert.component';

describe('RemoveRuleAlertComponent', () => {
  let component: RemoveRuleAlertComponent;
  let fixture: ComponentFixture<RemoveRuleAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRuleAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRuleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
