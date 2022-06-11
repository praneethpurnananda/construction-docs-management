import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonApiResponceUiComponent } from './common-api-responce-ui.component';

describe('CommonApiResponceUiComponent', () => {
  let component: CommonApiResponceUiComponent;
  let fixture: ComponentFixture<CommonApiResponceUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonApiResponceUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonApiResponceUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
