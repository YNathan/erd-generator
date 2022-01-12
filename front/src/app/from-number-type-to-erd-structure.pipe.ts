import { Pipe, PipeTransform } from '@angular/core';
import { TypeScriptTypesArray } from 'src/entities/tableGeneratorStructure';

@Pipe({
  name: 'fromNumberTypeToErdStructure'
})
export class FromNumberTypeToErdStructurePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const num = parseInt(value, 10);
    return TypeScriptTypesArray[num];
  }

}
