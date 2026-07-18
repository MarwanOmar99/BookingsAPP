import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminpackage } from './adminpackage';

describe('Adminpackage', () => {
  let component: Adminpackage;
  let fixture: ComponentFixture<Adminpackage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adminpackage],
    }).compileComponents();

    fixture = TestBed.createComponent(Adminpackage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
