import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegistrDialogComponent } from './manage-registr-dialog.component';

describe('ManageRegistrDialogComponent', () => {
  let component: ManageRegistrDialogComponent;
  let fixture: ComponentFixture<ManageRegistrDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRegistrDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRegistrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
