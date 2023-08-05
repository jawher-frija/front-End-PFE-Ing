import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdoctorComponent } from './modifierdoctor.component';

describe('ModifierdoctorComponent', () => {
  let component: ModifierdoctorComponent;
  let fixture: ComponentFixture<ModifierdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierdoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
