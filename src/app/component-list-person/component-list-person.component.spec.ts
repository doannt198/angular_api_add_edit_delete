import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListPersonComponent } from './component-list-person.component';

describe('ComponentListPersonComponent', () => {
  let component: ComponentListPersonComponent;
  let fixture: ComponentFixture<ComponentListPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentListPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentListPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
