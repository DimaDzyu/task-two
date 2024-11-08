import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { JsonplaceholderService } from "../../../services/jsonplaceholder.service";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  loading: boolean = false;

  constructor(private jsonplaceholderService: JsonplaceholderService) {
    this.jsonplaceholderService.loading$.subscribe((loading: boolean): void => {
      this.loading = loading;
    });
  }

  loadPosts(): void {
    this.jsonplaceholderService.loadPosts()
  }
}
