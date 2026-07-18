import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminhotel } from './adminhotel';

describe('Adminhotel', () => {
  let component: Adminhotel;
  let fixture: ComponentFixture<Adminhotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adminhotel],
    }).compileComponents();

    fixture = TestBed.createComponent(Adminhotel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
