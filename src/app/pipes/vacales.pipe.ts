import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vacales'
})
export class VacalesPipe implements PipeTransform {

  transform(value: string): string {
    return value
      .replace(/(a)/g, "4")
      .replace(/(e)/g, "3")
      .replace(/(i)/g, "1")
      .replace(/(o)/g, "0")
      .replace(/(u)/g, "|_|");
  }

}
