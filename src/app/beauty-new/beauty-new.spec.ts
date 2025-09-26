import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyNew } from './beauty-new';

describe('BeautyNew', () => {
  let component: BeautyNew;
  let fixture: ComponentFixture<BeautyNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
