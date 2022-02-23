import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormSignUpComponent } from './react-form-sign-up.component';

describe('ReactFormSignUpComponent', () => {
  let component: ReactFormSignUpComponent;
  let fixture: ComponentFixture<ReactFormSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactFormSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
