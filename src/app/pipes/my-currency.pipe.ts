import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency',
  standalone: true
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `R$ ${value}`;
  }

}
