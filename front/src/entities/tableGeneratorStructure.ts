export class ErdStructure {
  githubToken: string = undefined;
  tblName: string = undefined;
  columns: Column[];
}

export class Column {
  name: string;
  type: string;
  isPk: boolean;
  nullable: boolean;
  constraint: Constraint;
}

export class Constraint {
  name: string;
  tblParent: string;
  colParent: string;
}

export let TypeScriptTypesArray = ['INTEGER', 'TEXT', 'BOOLEAN', 'LOCALDATE', 'INSTANT', 'JSONB'];





