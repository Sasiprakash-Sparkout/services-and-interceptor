import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise } from './practise';

describe('Practise', () => {
  let component: Practise;
  let fixture: ComponentFixture<Practise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practise],
    }).compileComponents();

    fixture = TestBed.createComponent(Practise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
