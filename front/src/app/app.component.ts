import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DbConnectComponent } from './db-connect/db-connect.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = ' Erd';

  constructor(public dialog: MatDialog, public dataService: DataService) {
  }

    ngOnInit() {
      if (localStorage.getItem('pgConnOptHost') === null) {
        const dialogRef = this.dialog.open(DbConnectComponent, {
          data: { 'this.pgConnOpt': '' }
        });

        dialogRef.afterClosed().subscribe(result => {
          this.fillPgConectOptionFromLocalStorage();
        });
      } else {
        this.fillPgConectOptionFromLocalStorage();
      }
    }

    fillPgConectOptionFromLocalStorage() {
      this.dataService.pgConnect = {
        user: localStorage.getItem('pgConnOptUser'),
        password: localStorage.getItem('pgConnOptPassword'),
        host: localStorage.getItem('pgConnOptHost'),
        database: localStorage.getItem('pgConnOptDatabase')
      };
    }

}
