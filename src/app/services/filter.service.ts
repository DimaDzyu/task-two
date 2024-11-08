import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filter: BehaviorSubject<string> = new BehaviorSubject<string>('');
  filter$: Observable<string> = this.filter.asObservable();

  setData(newValue: string): void {
    this.filter.next(newValue);
  }
}
