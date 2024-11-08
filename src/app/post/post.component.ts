import { Component } from '@angular/core';
import { FilterComponent } from "./components/filter/filter.component";
import { ListComponent } from "./components/list/list.component";
import { JsonplaceholderService } from "../services/jsonplaceholder.service";
import { MatButtonToggle } from "@angular/material/button-toggle";
import { MatButton } from "@angular/material/button";
import { NgIf } from "@angular/common";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatDivider } from "@angular/material/divider";
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    FilterComponent,
    ListComponent,
    MatButtonToggle,
    MatButton,
    NgIf,
    MatProgressSpinner,
    MatDivider,
    ButtonComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  loading: boolean = false;

  constructor(private jsonplaceholderService: JsonplaceholderService) {
    this.jsonplaceholderService.loading$.subscribe((loading: boolean): void => {
      this.loading = loading;
    });
  }
}
