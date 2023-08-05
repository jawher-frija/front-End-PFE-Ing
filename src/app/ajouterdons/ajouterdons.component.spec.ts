import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdonsComponent } from './ajouterdons.component';

describe('AjouterdonsComponent', () => {
  let component: AjouterdonsComponent;
  let fixture: ComponentFixture<AjouterdonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterdonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterdonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
