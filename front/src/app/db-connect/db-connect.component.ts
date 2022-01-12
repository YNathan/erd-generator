import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PGConnectionOption } from '../Entities/hr';

@Component({
  selector: 'app-db-connect',
  templateUrl: './db-connect.component.html',
  styleUrls: ['./db-connect.component.less']
})
export class DbConnectComponent implements OnInit {
  pgConnect: PGConnectionOption;
  dbHost = new FormControl(localStorage.getItem('pgConnOptHost'), [Validators.required]);
  dbName = new FormControl(localStorage.getItem('pgConnOptDatabase'), [Validators.required]);
  dbUser = new FormControl(localStorage.getItem('pgConnOptUser'), [Validators.required]);
  dbPassword = new FormControl(localStorage.getItem('pgConnOptPassword'), [Validators.required]);

  constructor(public dialogRef: MatDialogRef<DbConnectComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }
  onDbSubmit() {
    localStorage.setItem('pgConnOptUser', this.dbUser.value);
    localStorage.setItem('pgConnOptPassword', this.dbPassword.value);
    localStorage.setItem('pgConnOptHost', this.dbHost.value);
    localStorage.setItem('pgConnOptDatabase', this.dbName.value);
    this.pgConnect = {
      database: this.dbName.value,
      host: this.dbHost.value,
      password: this.dbPassword.value,
      user: this.dbUser.value
    };
    this.dialogRef.close(this.pgConnect);
  }
}
