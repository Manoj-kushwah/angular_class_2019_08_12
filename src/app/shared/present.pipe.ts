import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persent'
})
export class PresentPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value = (value*100)/500;
    return `Toatal: ${value}%`;
  }

}
