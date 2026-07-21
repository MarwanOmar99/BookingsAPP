import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facebookreviws } from './facebookreviws';

describe('Facebookreviws', () => {
  let component: Facebookreviws;
  let fixture: ComponentFixture<Facebookreviws>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Facebookreviws],
    }).compileComponents();

    fixture = TestBed.createComponent(Facebookreviws);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
