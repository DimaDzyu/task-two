import { TestBed } from '@angular/core/testing';
import { JsonplaceholderService } from './jsonplaceholder.service';
import {PostComponent} from "../post/post.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('JsonplaceholderService', (): void => {
  let service: JsonplaceholderService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [PostComponent, HttpClientModule, BrowserAnimationsModule]
    });
    service = TestBed.inject(JsonplaceholderService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
