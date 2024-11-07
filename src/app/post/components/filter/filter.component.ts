import { Component } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInput, MatLabel } from "@angular/material/input";

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
  changeUserId(event: any): void {
    if (event.target.value.match(/[^0-9]/)) {
      event.target.value = event.target.value.replace(/\D/, '');
      event.preventDefault();
    }

    console.log(event.target.value)
  }
}
