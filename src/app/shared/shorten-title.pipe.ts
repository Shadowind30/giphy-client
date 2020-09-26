import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(title: string): unknown {
  	let shortTitle = title;
  	
  	if (title.length > 20) {
  		shortTitle = title.split('').splice(0, 17).join('') + '...';
  	}
  	
    return shortTitle;
  }

}
