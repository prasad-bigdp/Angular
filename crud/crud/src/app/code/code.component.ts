import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent {
  html: string = `<div class="container">
    <mat-toolbar color="primary">
        <span>CRUD App</span>
        <span class="example-spacer"></span>
        <button mat-raised-button color="accent" (click)="add()">Add</button>
    </mat-toolbar>

    <div *ngIf="data">
        <mat-table [dataSource]="dataSource" matSort>
            <ng-container matColumnDef="position">
                <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.id}} </mat-cell>
            </ng-container>

            <ng-container matColumnDef="name">
                <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.title}} </mat-cell>
            </ng-container>

            <ng-container matColumnDef="author">
                <mat-header-cell *matHeaderCellDef mat-sort-header> Author </mat-header-cell>
                <mat-cell *matCellDef="let element"> {{element.author}} </mat-cell>
            </ng-container>

            <ng-container matColumnDef="actions">
                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>
                <mat-cell *matCellDef="let element">
                    <button mat-icon-button color="primary" (click)="update(element.id, element)">
                        <mat-icon>edit</mat-icon>
                    </button>
                    <button mat-icon-button color="warn" (click)="delete(element.id)">
                        <mat-icon>delete</mat-icon>
                    </button>
                </mat-cell>
            </ng-container>

            <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
            <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
        </mat-table>

        <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" showFirstLastButtons></mat-paginator>
    </div>

    <div *ngIf="showForm" class="formContainer">
        <div class="popup">
            <form #myform="ngForm" class="form" (ngSubmit)="addData(myform.value)">
                <mat-form-field>
                    <label>Title</label>
                    <input matInput ngModel name="title" [(ngModel)]="title" required />
                </mat-form-field>

                <mat-form-field>
                    <label>Author</label>
                    <input matInput ngModel name="author" [(ngModel)]="author" required />
                </mat-form-field>

                <div class="buttons">
                    <button mat-raised-button color="primary" type="submit">{{editMode ? 'Update' : 'Add'}}</button>
                    <button mat-raised-button color="warn" (click)="closeForm()">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>`;
  ts: string = `import { Component } from '@angular/core';
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
}`;
  module: string = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [AppComponent, CodeComponent,CrudComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
`;
  service: string = `import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/books';
  constructor(private hc: HttpClient) {}

  getData():Observable<any> {
    return this.hc.get(this.url);
  }
  postData(data:any)
  {
     return this.hc.post(url,data)
  }
  updateData(id:any,data:any) {
     return this.hc.put(url/id,data) 
  }
  deleteData(id: any)
  {
    return this.hc.delete(url/id)
  }
}
`
}
