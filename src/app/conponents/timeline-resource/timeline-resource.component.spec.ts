import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineResourceComponent } from './timeline-resource.component';

describe('TimelineResourceComponent', () => {
  let component: TimelineResourceComponent;
  let fixture: ComponentFixture<TimelineResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
