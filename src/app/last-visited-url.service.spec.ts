import { TestBed } from '@angular/core/testing';

import { LastVisitedUrlService } from './last-visited-url.service';

describe('LastVisitedUrlService', () => {
  let service: LastVisitedUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastVisitedUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
