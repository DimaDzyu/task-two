import { TestBed } from '@angular/core/testing';
import { JsonplaceholderService } from './jsonplaceholder.service';

describe('JsonplaceholderService', (): void => {
  let service: JsonplaceholderService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceholderService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
