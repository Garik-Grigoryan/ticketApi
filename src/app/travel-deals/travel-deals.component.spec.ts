import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDealsComponent } from './travel-deals.component';

describe('TravelDealsComponent', () => {
  let component: TravelDealsComponent;
  let fixture: ComponentFixture<TravelDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
