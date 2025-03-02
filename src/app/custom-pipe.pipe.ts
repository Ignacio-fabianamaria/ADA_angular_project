import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any): string {
    if (value === 10) {
      return `${value}/10 ⭐`;
    }
    return `${value}/10`;
  }

}
