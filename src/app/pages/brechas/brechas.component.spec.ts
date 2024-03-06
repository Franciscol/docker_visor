import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrechasComponent } from './brechas.component';

describe('BrechasComponent', () => {
  let component: BrechasComponent;
  let fixture: ComponentFixture<BrechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrechasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
