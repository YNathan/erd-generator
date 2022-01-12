import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTableComponent } from './new-table/new-table.component';

import { AppComponent } from './app.component';
import { TablesViewComponent } from './tables-view/tables-view.component';
import { RelationsComponent } from './relations/relations.component';
import { HrDocumentGeneratorComponent } from './hr-document-generator/hr-document-generator.component';


const routes: Routes = [
  { path: 'new-table', component: NewTableComponent },
  { path: 'relations', component: RelationsComponent },
  { path: 'hr-docs', component: HrDocumentGeneratorComponent },

  { path: '**', component: TablesViewComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
