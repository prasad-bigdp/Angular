import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ppc'
})
export class PpcPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    const val = value.toUpperCase()
    const result= args[0]+val+args[1]
    return result ;
  }

}
