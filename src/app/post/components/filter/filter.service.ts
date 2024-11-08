import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filter = new BehaviorSubject<string>('');
  filter$ = this.filter.asObservable();

  setData(newValue: string) {
    this.filter.next(newValue);
  }
}
