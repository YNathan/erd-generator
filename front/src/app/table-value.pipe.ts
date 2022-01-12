import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableValue'
})
export class TableValuePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value instanceof Date) {
      console.log(`its a date`);
    }
    return value;
  }

}
