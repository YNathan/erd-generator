import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErdStructure } from 'src/entities/tableGeneratorStructure';
import * as types from 'src/entities/tableGeneratorStructure';
import { GetterService } from '../services/getter.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less']
})
export class ColumnComponent implements OnInit {
  @Output() submitedCol: EventEmitter<types.Column> = new EventEmitter();
  @Input() receivedCol: types.Column | undefined;
  @Input() colIndex: number;
  erdStrct: ErdStructure;
  colTypes: any[] = [];

  submited: boolean;
id: number;
  name: string;
  type: string;
  isPk = false;
  nullable = false;
  tblParent: string;
  colParent: string;

  colName = new FormControl('', [Validators.required]);
  constraint: types.Constraint = undefined;

  parentTablesList: string[] = [];
  parentTableColumnsNames: string[] = [];
  constructor(private gtService: GetterService, private dataService: DataService) {}

  ngOnInit() {
    if (this.receivedCol !== undefined) {
      this.name = this.receivedCol.name;
      this.type =  this.receivedCol.type;
      this.isPk = this.receivedCol.isPk;
      this.nullable = this.receivedCol.nullable;
      if (this.receivedCol.constraint !== undefined) {
        this.name = this.receivedCol.constraint.name;
        this.tblParent = this.receivedCol.constraint.tblParent;
        this.colParent = this.receivedCol.constraint.colParent;
      }
    }

    this.colTypes = types.TypeScriptTypesArray;
    this.getParentTablesName('');
  }
  getParentTablesName(filterKeyword: string) {
    this.gtService.getTablesName(this.dataService.pgConnect).subscribe(data => {
      this.parentTablesList = data.tablesName.filter(tblName => tblName.includes(filterKeyword));
    });
  }
  getTableStructure(tblName: string): void {
    this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(data => {
      this.parentTableColumnsNames = data.tableCol.map(x => x.name);
    });
  }
  getErrorMessage(fieldName: string) {
    // tslint:disable-next-line: max-line-length
    return this[fieldName].hasError('required') ? 'You must enter a ' + fieldName : this[fieldName].hasError(fieldName) ? 'Not a valid ' + fieldName : '';
  }

  constraintParentTableChange(tblName: string) {
    console.log(tblName);
    this.getTableStructure(tblName);
  }

  submitColumn() {
    if (!this.name) {
      console.log('column name is empty');
    } else if (!this.type) {
      console.log('column type is empty');
    } else if (this.constraintValid() === -1) {
      console.log('constraint is not valid');
    } else {
      const col: types.Column = {
        name: this.name,
        type: this.type,
        isPk: this.isPk,
        nullable: this.nullable,
        constraint: undefined
      };
      if (this.constraintValid() === 1) {
        col.constraint =  {
          name : '',
          tblParent : this.tblParent,
          colParent : this.colParent
        };
      }
      this.submited = true;
      this.submitedCol.emit(col);
    }
  }

  constraintValid(): number {
    let isValid = -1;
    if (this.tblParent && this.colParent) {
      isValid = 1;
    } else if (!this.tblParent && !this.colParent) {
      isValid = 0;
    }
    return isValid;
  }
}
