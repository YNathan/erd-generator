import { Component, OnInit } from '@angular/core';
import { GetterService } from '../services/getter.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataService } from '../services/data.service';
import { element } from 'protractor';

export interface ColumnElement {
  name: string;
  type: string;
  nullable: boolean;
  isPk: boolean;
  relatedToTable: string;
  atColumn: string;
  fkName: string;
}

const ELEMENT_DATA: ColumnElement[] = [];

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.less']
})
export class ListTablesComponent implements OnInit {
  tablesList = [];
  displayedColumns: string[] = ['name', 'type', 'nullable', 'isPk', 'relatedToTable', 'atColumn', 'fkName'];
  colSource = new MatTableDataSource<ColumnElement>(ELEMENT_DATA);
  openeds = {};
  loaded = {};

  constructor(private gtService: GetterService, private dataService: DataService) { }

  ngOnInit() {
    this.getTablesName('');
  }
  getTablesName(filterKeyword: string) {
    this.gtService.getTablesName(this.dataService.pgConnect).subscribe(data => {
      data.tablesName.filter(tblName => tblName.includes(filterKeyword)).forEach(element => {
        const tbl = {
          name: element,
          colSource: new MatTableDataSource<ColumnElement>(ELEMENT_DATA),
          openeds: false
        };
        this.tablesList.push(tbl);
      });
    });
  }

  getTableStructure(tblName: string, index: number): void {
    this.loaded[index] = true;
    this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(data => {
      this.tablesList.forEach(tbl => {
        if (tbl.name === tblName) {
          tbl.colSource = data.tableCol;
          console.log(tbl.colSource.length);
        }
      });
    });
  }

  applyFilter(evt) {
    this.getTablesName(evt);
  }
}
