import { Component, OnInit, Injectable } from '@angular/core';
import { GetterService } from '../../services/getter.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { DisplayTableDialogComponent } from 'src/app/dialogs/displayTable/displayTable.dialog.component';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent-to-childs',
  templateUrl: './parent-to-childs.component.html',
  styleUrls: ['./parent-to-childs.component.less']
})
export class ParentToChildsComponent implements OnInit {

  constructor(private gtService: GetterService, private database: ParentToChildsDynamicDatabase,
              public dialog: MatDialog, private dataService: DataService) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);
    this.gtService.getRealtions(this.dataService.pgConnect).subscribe(rltDic => {

      this.dataSource.data = this.database.initialData(rltDic.parentToChildsDictionary);
    });
  }


  relationsDictionary = {};

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  ngOnInit() {
    this.gtService.getRealtions(this.dataService.pgConnect).subscribe(rltDic => {

      this.relationsDictionary = rltDic;
    });
  }

  tableClicked(tblName): void {
    this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(columns => {
      this.displayTable(tblName, columns.tableCol);
    });
  }

  displayTable(tblName: string, columns: any[]) {
    this.dialog.open(DisplayTableDialogComponent, { data: { tblName, columns } });
  }

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}


/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
              public isLoading = false) { }
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class ParentToChildsDynamicDatabase {
  dataMap = new Map<string, string[]>();

  rootLevelNodes: string[] = ['Fruits', 'Vegetables'];

  /** Initial data from database */
  initialData(relationsTableDictionary): DynamicFlatNode[] {
    for (const prntTbl of Object.keys(relationsTableDictionary)) {
      this.dataMap.set(prntTbl, relationsTableDictionary[prntTbl]);
    }

    this.rootLevelNodes = Object.keys(relationsTableDictionary);
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
              private database: ParentToChildsDynamicDatabase) { }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++ , count++) { }
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1000);
  }
}
