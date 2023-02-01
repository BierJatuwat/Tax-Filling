import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    return value.toString().replace(/,/g, '');
  }

}
