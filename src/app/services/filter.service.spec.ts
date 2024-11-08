import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { PostComponent } from "../post/post.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('FilterService', (): void => {
  let service: FilterService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [PostComponent, HttpClientModule, BrowserAnimationsModule]
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
