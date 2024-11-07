import { Component } from '@angular/core';
import { FilterComponent } from "./components/filter/filter.component";
import { ListComponent } from "./components/list/list.component";
import { JsonplaceholderService } from "../services/jsonplaceholder.service";
import { MatButtonToggle } from "@angular/material/button-toggle";
import { MatButton } from "@angular/material/button";
import { finalize } from "rxjs";
import { NgIf } from "@angular/common";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatDivider } from "@angular/material/divider";

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
    MatDivider
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  loading: boolean = false;

  constructor(private jsonplaceholderService: JsonplaceholderService) {
  }

  getPosts(): void {
    this.loading = true;
    this.jsonplaceholderService.getPosts().pipe(
      finalize((): void => {
          setTimeout((): void => {
            this.loading = false;
          }, 500);
        }
      ))
      .subscribe(
        (res): void => {
          console.log(res)
        });
  }
}
