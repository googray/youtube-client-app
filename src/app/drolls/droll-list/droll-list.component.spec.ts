import { ComponentFixture, TestBed } from '@angular/core/testing';

import DrollListComponent from './droll-list.component';

describe('DrollListComponent', () => {
  let component: DrollListComponent;
  let fixture: ComponentFixture<DrollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrollListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
