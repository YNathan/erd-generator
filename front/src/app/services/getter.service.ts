import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { PGConnectionOption } from '../Entities/hr';

@Injectable({
  providedIn: 'root'
})
export class GetterService {
  host = 'http://localhost';
  port = '5000';
  headUrl = this.host + ':' + this.port + '/api/';

  getTablesUrl = this.headUrl + 'get_tables';
  getTableStructureUrl = this.headUrl + 'get_table_structure';
  getRelationsUrl = this.headUrl + 'get_relations';
  constructor(private http: HttpClient) { }
  /* development porpose
    mokeTblList: Observable<string[]> = new Observable<string[]>();
     mokeColList: Observable<string[]> = new Observable<string[]>();
     */
  getTablesName(pgConn: PGConnectionOption): Observable<any> {
    /* development porpose
      const simpleObservable = new Observable((observer) => {
      observer.next({tablesName : ['tbl1','tbl2','tbl3']});
        observer.complete();
      });
      return simpleObservable;*/
    return this.http.get(this.getTablesUrl + `?username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);

  }

  getTableStructure(tblName: string, pgConn: PGConnectionOption): Observable<any> {
    /* development porpose
     const simpleObservable = new Observable((observer) => {
       observer.next({tableCol : [{name: 'id'}, {name: 'a'}, {name: 'b'}]});
        observer.complete();
     });

     return simpleObservable;*/
    return this.http.get(this.getTableStructureUrl + `?tblName=${tblName}&username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
  }

  getRealtions(pgConn: PGConnectionOption): Observable<any> {
    return this.http.get(this.getRelationsUrl +
      `?username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
  }

}

