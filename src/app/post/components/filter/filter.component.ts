import { Component } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInput, MatLabel } from "@angular/material/input";
import { FilterService } from "../../../services/filter.service";

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

  constructor(private filterService: FilterService) {
  }

  applyFilter(event: Event): void {
    let filterValue: string = (event.target as HTMLInputElement).value;

    if (filterValue.match(/[^0-9]/)) {
      filterValue = filterValue.replace(/\D/, '');
      (event.target as HTMLInputElement).value = filterValue;
      event.preventDefault();
    }

    this.filterService.setData(filterValue);
  }
}
