import { Component } from '@angular/core';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'author', 'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  title = '';
  author = '';
  data: any;
  showForm = false;
  editMode = false;
  editId = null;

  constructor(private as: ApiService) {}

  ngOnInit(): void {
    this.getDataMethod();
  }

  add() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.resetForm();
  }

  addData(data: any) {
    console.log(data);
    if (this.editMode) {
      this.as
        .updateData(this.editId, data)
        .subscribe(() => this.getDataMethod());
      this.resetForm();
    } else {
      this.as.postData(data).subscribe(() => this.getDataMethod());
    }

    this.showForm = false;
  }

  update(id: any, data: any) {
    console.log(data);
    this.editMode = true;
    this.editId = id;
    this.title = data.title;
    this.author = data.author;
    this.showForm = true;
  }

  delete(id: any) {
    this.as.deleteData(id).subscribe(() => this.getDataMethod());
  }

  getDataMethod() {
    this.as.getData().subscribe(
      (data) => {
        this.data = data;
        this.dataSource.data = data;
      },
      (error) => console.log(error)
    );
  }

  resetForm() {
    this.title = '';
    this.author = '';
    this.editMode = false;
    this.editId = null;
  }
}