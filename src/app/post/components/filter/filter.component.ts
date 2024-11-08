import { Component, Injectable } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInput, MatLabel } from "@angular/material/input";
import { BehaviorSubject } from "rxjs";
import {FilterService} from "./filter.service";

// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatLabel
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  // private filter = new BehaviorSubject<string>('6');
  // filter$ = this.filter.asObservable(); private filterComponent: FilterComponent

  constructor(private filterService: FilterService) {
  }

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value;

    //let cleanText =
    if (filterValue.match(/[^0-9]/)) {
      (event.target as HTMLInputElement).value = filterValue.replace(/\D/, '');
      event.preventDefault();
    }

    this.filterService.setData((event.target as HTMLInputElement).value);


    //this.filter = (event.target as HTMLInputElement).value;
  }
}
