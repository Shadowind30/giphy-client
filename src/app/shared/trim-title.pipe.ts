import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimTitle'
})
export class TrimTitlePipe implements PipeTransform {

  transform(title: string): string {
  	let newTitle = title.split('GIF')[0];
    return newTitle;
  }

}
