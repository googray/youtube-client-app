import { ComponentFixture, TestBed } from '@angular/core/testing';

import UnauthComponentComponent from './unauth-component.component';

describe('UnauthComponentComponent', () => {
  let component: UnauthComponentComponent;
  let fixture: ComponentFixture<UnauthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnauthComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnauthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
