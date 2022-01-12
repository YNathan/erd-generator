import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HRDocumentType, PGConnectionOption, HRSubsectionTemplate, HRSubsection } from '../Entities/hr';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  host = 'http://localhost';
  port = '5000';
  headUrl = this.host + ':' + this.port + '/api/';

  getHrDocsTypeUrl = this.headUrl + 'hr_doc_type';
  getHrSubsectionTemplateByDocumentTypeIdUrl = this.headUrl + 'hr_subsection_template_by_doc_type_id';
  getHrSubsectionByHrSubsectionTemplateIdUrl = this.headUrl + 'hr_subsection_by_subsection_template_id';

  constructor(private http: HttpClient) { }

  getHrDocumentType(pgConn: PGConnectionOption): Observable<HRDocumentType[]> {
    return this.http.get<HRDocumentType[]>(this.getHrDocsTypeUrl +
      `?username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
  }
  getHrSubsectionTemplateByDocumentTypeId(pgConn: PGConnectionOption, hrDocumentTypeId: number): Observable<HRSubsectionTemplate[]> {
    return this.http.get<HRSubsectionTemplate[]>(this.getHrSubsectionTemplateByDocumentTypeIdUrl +
      `?docTypeId=${hrDocumentTypeId}&username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
  }

  getHrSubsectionByHrSubsectionTemplateId(pgConn: PGConnectionOption, hrSubsectionTemplateId: number): Observable<HRSubsection[]> {
    return this.http.get<HRSubsection[]>(this.getHrSubsectionByHrSubsectionTemplateIdUrl +
      `?subsectionTemplateId=${hrSubsectionTemplateId}
      &username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
  }


}

