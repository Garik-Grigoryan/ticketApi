import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDeparturePointsComponent } from './popular-departure-points.component';

describe('PopularDeparturePointsComponent', () => {
  let component: PopularDeparturePointsComponent;
  let fixture: ComponentFixture<PopularDeparturePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDeparturePointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDeparturePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
