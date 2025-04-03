import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number | undefined | null): string {
    if (value == null || value == undefined || value <= 0) {
      return '';
    }
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    if (minutes === 0) {
      return `${hours}h`;
    } else if (hours === 0) {
      return `${minutes}min`;
    } else {
      return `${hours}h${minutes}min`;
    }
  }
}
