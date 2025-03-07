import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetoUpper'
})
export class PipesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }
}

@Pipe({
  name: 'addStar'
})
export class AddStarPipe implements PipeTransform {

  transform(value: number): string {
    console.log(value);

    // Verificar se a nota é igual a 10 e adicionar a estrela apenas nessa condição
    if (value === 10) {
      return `${value}/10 ⭐`;  // Quando for 10, adiciona a estrela
    }
    return `${value}/10`;  // Caso contrário, apenas o valor seguido de "/10"
  }
}
