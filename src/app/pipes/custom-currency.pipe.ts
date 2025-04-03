import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: string | number | undefined | null): string {
    if (value == null || value == undefined || +value <= 0) {
      return '$0';
    }
    return `$${value} millions`;
  }
}
