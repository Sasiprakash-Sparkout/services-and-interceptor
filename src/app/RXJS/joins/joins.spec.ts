import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joins } from './joins';

describe('Joins', () => {
  let component: Joins;
  let fixture: ComponentFixture<Joins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Joins],
    }).compileComponents();

    fixture = TestBed.createComponent(Joins);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
