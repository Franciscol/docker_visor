import { TestBed } from '@angular/core/testing';

import { DataBrechasServiceService } from './data-brechas.service.service';

describe('DataBrechasServiceService', () => {
  let service: DataBrechasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBrechasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
