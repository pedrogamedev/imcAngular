import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcIMCComponent } from './calc-imc.component';



describe('CalcIMCComponent', () => {
  let component: CalcIMCComponent;
  let fixture: ComponentFixture<CalcIMCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcIMCComponent]
    });
    fixture = TestBed.createComponent(CalcIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
