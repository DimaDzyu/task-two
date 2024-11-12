import { Component, OnDestroy } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { JsonplaceholderService } from "../../../services/jsonplaceholder.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnDestroy {
  loading: boolean = false;
  subscriptionJsonplaceholderService: Subscription;

  constructor(private jsonplaceholderService: JsonplaceholderService) {
    this.jsonplaceholderService.loading$.subscribe((loading: boolean): void => {
      this.loading = loading;
    });
  }

  loadPosts(): void {
    this.jsonplaceholderService.loadPosts()
  }

  ngOnDestroy(): void {
    this.subscriptionJsonplaceholderService.unsubscribe();
  }
}
