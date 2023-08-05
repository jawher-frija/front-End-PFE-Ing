import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuPatientComponent } from './signu-patient.component';

describe('SignuPatientComponent', () => {
  let component: SignuPatientComponent;
  let fixture: ComponentFixture<SignuPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
