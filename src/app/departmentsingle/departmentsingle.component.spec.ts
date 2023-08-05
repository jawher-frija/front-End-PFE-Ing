import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsingleComponent } from './departmentsingle.component';

describe('DepartmentsingleComponent', () => {
  let component: DepartmentsingleComponent;
  let fixture: ComponentFixture<DepartmentsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
