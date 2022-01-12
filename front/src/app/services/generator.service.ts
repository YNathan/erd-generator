import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  host = 'http://localhost';
  port = '5000';
  headUrl = this.host + ':' + this.port + '/api/';

  postGenerateTamplateUrl = this.headUrl + 'create_template';

  constructor(private http: HttpClient) {}

  generateTemplate(tblParams: any): Observable<any>  {
    return this.http.post(this.postGenerateTamplateUrl, tblParams, {
      responseType: 'arraybuffer'
    });
  }
}
