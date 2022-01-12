import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-git-token',
  templateUrl: './git-token.component.html',
  styleUrls: ['./git-token.component.less']
})
export class GitTokenComponent implements OnInit {
  gitToken = new FormControl(localStorage.getItem('githubToken'), [Validators.required]);
  constructor(public dialogRef: MatDialogRef<GitTokenComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick() {
    this.dialogRef.close();
  }
  onDbSubmit() {
    localStorage.setItem('githubToken', this.gitToken.value);
    this.dialogRef.close(this.gitToken.value);
  }

}
