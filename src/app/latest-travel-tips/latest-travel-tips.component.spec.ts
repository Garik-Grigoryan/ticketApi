import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTravelTipsComponent } from './latest-travel-tips.component';

describe('LatestTravelTipsComponent', () => {
  let component: LatestTravelTipsComponent;
  let fixture: ComponentFixture<LatestTravelTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTravelTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTravelTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
