import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Packge } from './packge';

describe('Packge', () => {
  let component: Packge;
  let fixture: ComponentFixture<Packge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Packge],
    }).compileComponents();

    fixture = TestBed.createComponent(Packge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
