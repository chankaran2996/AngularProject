import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImg1Component } from './banner-img1.component';

describe('BannerImg1Component', () => {
  let component: BannerImg1Component;
  let fixture: ComponentFixture<BannerImg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerImg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
