import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({
  name: 'fromTableNameToTitle'
})
export class FromTableNameToTitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const titleWords = value.split('_');
    let title = '';
    for (const word of titleWords) {
      const newWord = word.charAt(0).toUpperCase() + word.slice(1);
      title += newWord + ' ';
    }
    return title;
  }

}
