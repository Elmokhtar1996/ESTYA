import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleCreateComponent } from './salle-create.component';

describe('SalleCreateComponent', () => {
  let component: SalleCreateComponent;
  let fixture: ComponentFixture<SalleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
