import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceAcumuladoComponent } from './avance-acumulado.component';

describe('AvanceAcumuladoComponent', () => {
  let component: AvanceAcumuladoComponent;
  let fixture: ComponentFixture<AvanceAcumuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvanceAcumuladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvanceAcumuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
