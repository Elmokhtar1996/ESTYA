import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResevationListComponent } from './resevation-list.component';

describe('ResevationListComponent', () => {
  let component: ResevationListComponent;
  let fixture: ComponentFixture<ResevationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResevationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResevationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
