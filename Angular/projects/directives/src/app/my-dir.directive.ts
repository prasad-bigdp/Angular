import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appMyDir]',
})
export class MyDirDirective {
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = 'red';
    
  }
}
