import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallApiEditComponent } from './call-api-edit.component';

describe('CallApiEditComponent', () => {
  let component: CallApiEditComponent;
  let fixture: ComponentFixture<CallApiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallApiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallApiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
