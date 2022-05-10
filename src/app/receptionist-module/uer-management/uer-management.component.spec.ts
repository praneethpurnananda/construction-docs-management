import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UerManagementComponent } from './uer-management.component';

describe('UerManagementComponent', () => {
  let component: UerManagementComponent;
  let fixture: ComponentFixture<UerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UerManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
