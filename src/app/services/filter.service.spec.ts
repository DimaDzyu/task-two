import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', (): void => {
  let service: FilterService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
