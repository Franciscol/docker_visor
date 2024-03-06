import { TestBed } from '@angular/core/testing';

import { AvanceAcumuladoService } from './avance-acumulado.service';

describe('AvanceAcumuladoService', () => {
  let service: AvanceAcumuladoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvanceAcumuladoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
