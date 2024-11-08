import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { FilterService } from "../filter/filter.service";

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
    MatSortHeader
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<Post>;

  @Input() posts: Post[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private filterService: FilterService) {

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.posts);
    this.dataSource.filterPredicate = function (data: Post, filter: string): boolean {
      return data.userId.toString() === filter;
    };
    this.filterService.filter$.subscribe((filter) => {
      console.log(filter);
      this.dataSource.filter = filter;
    });
  }

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value;

    if (filterValue.match(/[^0-9]/)) {
      (event.target as HTMLInputElement).value = filterValue.replace(/\D/, '');
      event.preventDefault();
    }

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
