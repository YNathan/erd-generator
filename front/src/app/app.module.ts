import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { TablesViewComponent } from './tables-view/tables-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Components
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FromTableNameToTitlePipe } from './from-table-name-to-title.pipe';
import { NewTableComponent } from './new-table/new-table.component';
import { ColumnComponent } from './column/column.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { DataService } from './services/data.service';
import { FromNumberTypeToErdStructurePipe } from './from-number-type-to-erd-structure.pipe';
import { RelationsComponent } from './relations/relations.component';
import { ParentToChildsComponent, ParentToChildsDynamicDatabase } from './relations/parent-to-childs/parent-to-childs.component';
import { ChildToParentsComponent, ChildToParentsDynamicDatabase } from './relations/child-to-parents/child-to-parents.component';
import { DisplayTableDialogComponent } from './dialogs/displayTable/displayTable.dialog.component';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { ListTablesComponent } from './list-tables/list-tables.component';
import { HrDocumentGeneratorComponent } from './hr-document-generator/hr-document-generator.component';
import { TableValuePipe } from './table-value.pipe';
import { DbConnectComponent } from './db-connect/db-connect.component';
import { RemoveActionColPipe } from './remove-action-col.pipe';
import { GitTokenComponent } from './git-token/git-token.component';
@NgModule({
  declarations: [
    AppComponent,
    TablesViewComponent,
    FromTableNameToTitlePipe,
    NewTableComponent,
    ColumnComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    FromNumberTypeToErdStructurePipe,
    RelationsComponent,
    ParentToChildsComponent,
    ChildToParentsComponent,
    DisplayTableDialogComponent,
    ListTablesComponent,
    HrDocumentGeneratorComponent,
    TableValuePipe,
    DbConnectComponent,
    RemoveActionColPipe,
    GitTokenComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatTreeModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    DisplayTableDialogComponent,
    DbConnectComponent,
    GitTokenComponent
  ],
  providers: [DataService, ParentToChildsDynamicDatabase, ChildToParentsDynamicDatabase,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
