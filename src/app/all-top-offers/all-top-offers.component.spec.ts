import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTopOffersComponent } from './all-top-offers.component';

describe('AllTopOffersComponent', () => {
  let component: AllTopOffersComponent;
  let fixture: ComponentFixture<AllTopOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTopOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTopOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
