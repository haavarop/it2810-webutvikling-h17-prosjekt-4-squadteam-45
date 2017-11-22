import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

// Capitalization pipe to display Paokimån names etc. with capital letter
export class CapitalizePipe implements PipeTransform {

  transform(value: any, words: boolean) {

    if (value) {
      if (words) {
        return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
      } else {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }

    return value;
  }
}
