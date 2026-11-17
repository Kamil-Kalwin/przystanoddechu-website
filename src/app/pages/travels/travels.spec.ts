import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travels } from './travels';

describe('Travels', () => {
  let component: Travels;
  let fixture: ComponentFixture<Travels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travels],
    }).compileComponents();

    fixture = TestBed.createComponent(Travels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
