import { Constraint } from './../../entities/tableGeneratorStructure';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Column, ErdStructure, TypeScriptTypesArray } from 'src/entities/tableGeneratorStructure';
import { GeneratorService } from '../services/generator.service';
import { ColumnElement } from '../list-tables/list-tables.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GitTokenComponent } from '../git-token/git-token.component';

export interface ColumnElement {
  id: number;
  name: string;
  type: string;
  nullable: boolean;
  isPk: boolean;
  fkName: string;
  relatedToTable: string;
  atColumn: string;
}


@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.less']
})

export class NewTableComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private generatorService: GeneratorService, public httpClient: HttpClient, public dialog: MatDialog, public dataService: DataService) {
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  githubToken: string;
  tableName = new FormControl('', [Validators.required]);
  columns: any[] = [];
  newColClicked = false;
  generatColUpdatedAt = false;
  generatColUpdatedBy = false;
  generatColCreatedAt = false;
  generatColCreatedBy = false;
  generatColPrimaryKey = false;
  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;


  index: number;
  id: number;
  name: string;
  displayedColumns: string[] = ['name', 'type', 'nullable', 'isPk', 'relatedToTable', 'atColumn', 'fkName', 'actions'];
  pendingRequest = false;
  ngOnInit(): void {
    if (localStorage.getItem('githubToken') === null) {
      const dialogRef = this.dialog.open(GitTokenComponent, {
        data: { githubToken: '' }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.fillPgConectOptionFromLocalStorage();
        this.loadData();
      });
    } else {
      this.fillPgConectOptionFromLocalStorage();
      this.loadData();
    }

    this.loadData();
  }
  fillPgConectOptionFromLocalStorage() {
    this.githubToken = localStorage.getItem('githubToken');
  }
  refresh() {
    this.loadData();
  }

  generateTemplate(erdStrct: ErdStructure): void {
    this.pendingRequest = true;
    this.generatorService.generateTemplate(erdStrct).subscribe(data => {
      const blob = new Blob([data], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      this.pendingRequest = false;
    });
  }

  getErrorMessage(fieldName: string) {
    // tslint:disable-next-line: max-line-length
    return this[fieldName].hasError('required') ? 'You must enter a ' + fieldName : this[fieldName].hasError(fieldName) ? 'Not a valid ' + fieldName : '';
  }

  onTableNameChange(searchValue: string): void {
  }


  constraintValid(col: Column): boolean {
    let valid = false;
    if (col.constraint && col.constraint.tblParent && col.constraint.colParent) {
      valid = true;
    }
    return valid;
  }


  generateCol(colGnrtd): void {
    const generatedColElement: ColumnElement = {
      name: '',
      type: '4',
      nullable: false,
      isPk: false,
      fkName: undefined,
      relatedToTable: undefined,
      atColumn: undefined
    };

    const colGenerated: Column = {
      name: '',
      type: '',
      nullable: false,
      isPk: false,
      constraint: undefined
    };


    if (colGnrtd === 'createdAt') {
      this.generatColCreatedAt = true;
      generatedColElement.name = 'created_at';
      generatedColElement.type = 'INSTANT';
    } else if (colGnrtd === 'createdBy') {
      this.generatColCreatedBy = true;
      generatedColElement.name = 'created_by';
      generatedColElement.type = 'INTEGER';
      generatedColElement.fkName = this.tableName.value + '_to_agency_member_fk';
      generatedColElement.relatedToTable = 'agency_member';
      generatedColElement.atColumn = 'id';
      colGenerated.constraint = {
        name: generatedColElement.fkName,
        tblParent: generatedColElement.relatedToTable,
        colParent: generatedColElement.atColumn
      };
    } else if (colGnrtd === 'updatedAt') {
      this.generatColUpdatedAt = true;
      generatedColElement.name = 'updated_at';
      generatedColElement.type = 'INSTANT';
    } else if (colGnrtd === 'updatedBy') {
      this.generatColUpdatedBy = true;
      generatedColElement.name = 'updated_by';
      generatedColElement.type = 'INTEGER';
      generatedColElement.fkName = this.tableName.value + '_to_agency_member_fk';
      generatedColElement.relatedToTable = 'agency_member';
      generatedColElement.atColumn = 'id';
      colGenerated.constraint = {
        name: generatedColElement.fkName,
        tblParent: generatedColElement.relatedToTable,
        colParent: generatedColElement.atColumn
      };
    } else if (colGnrtd === 'primaryKey') {
      this.generatColPrimaryKey = true;
      generatedColElement.name = 'id';
      generatedColElement.type = 'INTEGER';
      generatedColElement.isPk = true;
    }
    colGenerated.name = generatedColElement.name;
    colGenerated.type = generatedColElement.type;
    colGenerated.nullable = generatedColElement.nullable;
    colGenerated.isPk = generatedColElement.isPk;


    this.exampleDatabase.dataChange.value.push(colGenerated);
    this.refreshTable();


  }

  generateTable() {
    const newTableErdStructure = new ErdStructure();
    newTableErdStructure.tblName = this.tableName.value;
    newTableErdStructure.githubToken = this.githubToken;
    newTableErdStructure.columns = [];

    for (const row of this.exampleDatabase.dataChange.value) {

      const col: Column = {
        name: row.name,
        type: row.type,
        isPk: row.isPk,
        nullable: row.nullable,
        constraint: undefined
      };
      col.constraint = row.constraint;

      newTableErdStructure.columns.push(col);
    }
    this.generateTemplate(newTableErdStructure);
  }





  stringToEnum<ET, T>(enumObj: ET, str: keyof ET): T {
    return enumObj[str as string];
  }

  addNew(column: Column) {
    if (column === undefined) {
      column = {
        name: '',
        type: '',
        isPk: false,
        nullable: false,
        constraint: {
          name: '',
          tblParent: '',
          colParent: ''
        },
      };
    }
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { column }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 1) {
        column = this.dataService.getDialogData();
        if (this.constraintValid(column)) {
          column.constraint.name = this.tableName.value + '_' +
          column.name + '_to_' +
          column.constraint.tblParent + '_' +
          column.constraint.colParent + '_fk';
        }
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase.dataChange.value.push(column);
        this.refreshTable();
      }
    });
  }


  startEdit(i: number, name: string, type: string, nullable: boolean, isPk: boolean) {
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    const column: Column = {
      name,
      type,
      isPk,
      nullable,
      constraint: {
        name: '',
        tblParent: '',
        colParent: ''
      },
    };
    if (this.constraintValid(this.exampleDatabase.dataChange.value[this.index])) {
      column.constraint = {
        name: this.exampleDatabase.dataChange.value[this.index].constraint.name,
        tblParent: this.exampleDatabase.dataChange.value[this.index].constraint.tblParent,
        colParent: this.exampleDatabase.dataChange.value[this.index].constraint.colParent
      };
    }

    console.log(this.index);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { column }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const columnInserted = this.dataService.getDialogData();
        if (this.constraintValid(columnInserted)) {
          columnInserted.constraint.name = this.tableName.value + '_' +
            columnInserted.name + '_to_' +
            columnInserted.constraint.tblParent + '_' +
            columnInserted.constraint.colParent + '_fk';
        }

        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.name === this.name);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[this.index] = columnInserted;
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(i: number,
             name: string,
             type: string,
             nullable: boolean,
             isPk: boolean,
             relatedToTable: string,
             atColumn: string,
             fkName: string) {
    this.index = i;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { name, type, nullable, isPk, relatedToTable, atColumn, fkName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.name === this.name);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }


  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  public loadData() {
    this.exampleDatabase = new DataService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
  }

}


export class ExampleDataSource extends DataSource<Column> {
  filterChange = new BehaviorSubject('');

  get filter(): string {
    return this.filterChange.value;
  }

  set filter(filter: string) {
    this.filterChange.next(filter);
  }

  filteredData: Column[] = [];
  renderedData: Column[] = [];

  constructor(public exampleDatabase: DataService, public paginator: MatPaginator, public sort: MatSort) {
    super();

  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Column[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this.paginator.page,
      this.filterChange,


    ];

    this.exampleDatabase.getAllColumns();


    return merge(...displayDataChanges).pipe(map(() => {
      // Filter data
      this.filteredData = this.exampleDatabase.data.slice().filter((column: Column) => {
        const searchStr = (column.name + column.type + column.isPk + column.nullable).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
      return this.renderedData;


      return this.renderedData;
    }
    ));
  }

  /** Returns a sorted copy of the database data. */
  sortData(data: Column[]): Column[] {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this.sort.active) {
        case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'type': [propertyA, propertyB] = [a.type, b.type]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect() { }


}
