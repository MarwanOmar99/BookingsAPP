import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminusers } from './adminusers';

describe('Adminusers', () => {
  let component: Adminusers;
  let fixture: ComponentFixture<Adminusers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adminusers],
    }).compileComponents();

    fixture = TestBed.createComponent(Adminusers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
