import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OinReservationComponent } from './oin-reservation.component';

describe('OinReservationComponent', () => {
  let component: OinReservationComponent;
  let fixture: ComponentFixture<OinReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OinReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OinReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
