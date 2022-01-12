import { TypeScriptTypesArray } from './../../../entities/tableGeneratorStructure';
import { GetterService } from './../../services/getter.service';
import { GeneratorService } from './../../services/generator.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl, Validators } from '@angular/forms';
import { Column } from 'src/entities/tableGeneratorStructure';
import * as types from 'src/entities/tableGeneratorStructure';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Column,
              public dataService: DataService, public gtService: GetterService) {

    console.log(data);
    this.getParentTablesName('');
    this.name = data['column'].name;
    this.type = data['column'].type;
    this.isPk = data['column'].isPk;
    this.nullable = data['column'].nullable;
    if (data['column'].constraint) {
      this.tblParent = data['column'].constraint.tblParent,
        this.colParent = data['column'].constraint.colParent;
    }


  }
  colTypes = TypeScriptTypesArray;
  name = '';
  type = '';
  nullable = false;
  isPk = false;
  tblParent = '';
  colParent = '';
  parentTablesList: string[] = [];
  parentTableColumnsNames: string[] = [];
  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }
  getTableStructure(tblName: string): void {
    this.gtService.getTableStructure(tblName,this.dataService.pgConnect).subscribe(data => {
      this.parentTableColumnsNames = data.tableCol.map(x => x.name);
    });
  }
  getParentTablesName(filterKeyword: string) {
    this.gtService.getTablesName(this.dataService.pgConnect).subscribe(data => {
      this.parentTablesList = data.tablesName.filter(tblName => tblName.includes(filterKeyword));
    });
  }
  constraintParentTableChange(tblName: string) {
    console.log(tblName);
    this.getTableStructure(tblName);
  }
  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
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
        col.constraint = {
          name: '',
          tblParent: this.tblParent,
          colParent: this.colParent
        };
      }

      this.dataService.addColumn(col);
    }
  }

  submitColumn() {

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
