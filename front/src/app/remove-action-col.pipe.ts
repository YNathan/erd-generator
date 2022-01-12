import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeActionCol'
})
export class RemoveActionColPipe implements PipeTransform {

  transform(items: string[], ...args: any[]): any {
    items = items.reduce((acc, curr) => {
      if (curr !== 'viewQuestions') {
        acc.push(curr);
      } else {}
      return acc;
    }, []);
    return items;
  }

}
