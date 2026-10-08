import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obserable } from './obserable';

describe('Obserable', () => {
  let component: Obserable;
  let fixture: ComponentFixture<Obserable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obserable],
    }).compileComponents();

    fixture = TestBed.createComponent(Obserable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
