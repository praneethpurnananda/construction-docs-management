import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNewPasswordComponent } from './common-new-password.component';

describe('CommonNewPasswordComponent', () => {
  let component: CommonNewPasswordComponent;
  let fixture: ComponentFixture<CommonNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
