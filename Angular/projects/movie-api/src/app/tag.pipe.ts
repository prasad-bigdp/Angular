import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: Object, ...args: unknown[]): unknown {
    let data = JSON.stringify(value)
    let obj = {}
  
    return;
  }

}
