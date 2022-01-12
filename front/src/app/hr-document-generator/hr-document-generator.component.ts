import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { HRDocumentType, PGConnectionOption, HRSubsectionTemplate, HRSubsection } from '../Entities/hr';
import { HrService } from '../services/hr.service';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { DbConnectComponent } from '../db-connect/db-connect.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hr-document-generator',
  templateUrl: './hr-document-generator.component.html',
  styleUrls: ['./hr-document-generator.component.less']
})

@NgModule({
  imports: [CommonModule],
  declarations: [HrDocumentGeneratorComponent]

})
export class HrDocumentGeneratorComponent implements OnInit {
  pgConnOpt: PGConnectionOption;

  hrDocTypsArr: HRDocumentType[];
  hrDocTypeSelected: HRDocumentType;

  hrSubSectionTemplateArr: HRSubsectionTemplate[];
  hrSubSectionTemplateSelected: HRSubsectionTemplate;

  hrSubsectionArr: HRSubsection[];
  hrSubsectionDataSource = new MatTableDataSource(this.hrSubsectionArr);
  hrSubsectionSelected: HRSubsection;
  hrSubsectionColumns: string[] = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  filterCols = ['template_id', 'created_at', 'is_name_editable', 'is_question_editable', 'settings', 'order_num', 'section', 'type'];
  constructor(private hrService: HrService, public dialog: MatDialog, public dataService: DataService) { }

  ngOnInit() {
    this.pgConnOpt = this.dataService.pgConnect;
    this.onDbSubmit();
  }



onDbSubmit() {

  this.hrService.getHrDocumentType(this.pgConnOpt).subscribe(data => {
    this.hrDocTypsArr = data;
  });
}

docTypeChange(hrDocTypeSelected: HRDocumentType) {
  console.log(hrDocTypeSelected);
  this.hrService.getHrSubsectionTemplateByDocumentTypeId(this.pgConnOpt, hrDocTypeSelected.id).subscribe(data => {
    this.hrSubSectionTemplateArr = data;
  });
}

subsectionTamplateChange(hrSubsectionTemplate: HRSubsectionTemplate) {
  console.log(hrSubsectionTemplate);
  this.hrService.getHrSubsectionByHrSubsectionTemplateId(this.pgConnOpt, hrSubsectionTemplate.id).subscribe(data => {
    this.hrSubsectionArr = data;
    this.hrSubsectionDataSource = new MatTableDataSource(this.hrSubsectionArr);

    this.hrSubsectionColumns = Object.keys(this.hrSubsectionArr[0]).reduce((accumulator, currentValue) => {
      if (this.filterCols.filter(x => x === currentValue).length) {
        return accumulator;
      } else {
        accumulator.push(currentValue);
        return accumulator;
      }
    }, []);
    this.hrSubsectionColumns.push('viewQuestions');
    this.hrSubsectionDataSource.sort = this.sort;
  });
}

subsectionChange(hrSubsection: HRSubsection) {
  console.log(hrSubsection);
}

subsectionFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.hrSubsectionDataSource.filter = filterValue.trim().toLowerCase();
}

}
