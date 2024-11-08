import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import { MatSort, MatSortHeader } from "@angular/material/sort";
import { Post } from "../../post.interface";
import { FilterService } from "../../../services/filter.service";
import { JsonplaceholderService } from "../../../services/jsonplaceholder.service";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatLabel,
    MatInput,
    MatFormField,
    MatTable,
    MatSort,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatNoDataRow,
    MatHeaderCellDef,
    MatCellDef,
    MatSortHeader,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private filterService: FilterService, private jsonplaceholderService: JsonplaceholderService) {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.jsonplaceholderService.posts$.subscribe((posts: Post[]): void => {
      this.dataSource = new MatTableDataSource(posts);
    });

    this.filterService.filter$.subscribe((filter: string): void => {
      this.dataSource.filter = filter;
    });

    this.dataSource.filterPredicate = function (data: Post, filter: string): boolean {
      return data.userId.toString() === filter;
    };
  }
}
