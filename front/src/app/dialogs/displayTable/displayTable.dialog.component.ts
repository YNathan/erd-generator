import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-display-table.dialog',
  templateUrl: '../../dialogs/displayTable/displayTable.dialog.html',
  styleUrls: ['../../dialogs/displayTable/displayTable.dialog.css']
})
export class DisplayTableDialogComponent {

  constructor(public dialogRef: MatDialogRef<DisplayTableDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteColumn(this.data.id);
  }
}
