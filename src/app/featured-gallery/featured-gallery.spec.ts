import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedGallery } from './featured-gallery';

describe('FeaturedGallery', () => {
  let component: FeaturedGallery;
  let fixture: ComponentFixture<FeaturedGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
