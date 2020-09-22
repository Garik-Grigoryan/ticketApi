import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDealsComponent } from './find-deals.component';

describe('FindDealsComponent', () => {
  let component: FindDealsComponent;
  let fixture: ComponentFixture<FindDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
