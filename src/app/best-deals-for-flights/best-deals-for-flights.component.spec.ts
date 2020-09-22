import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDealsForFlightsComponent } from './best-deals-for-flights.component';

describe('BestDealsForFlightsComponent', () => {
  let component: BestDealsForFlightsComponent;
  let fixture: ComponentFixture<BestDealsForFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDealsForFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDealsForFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
