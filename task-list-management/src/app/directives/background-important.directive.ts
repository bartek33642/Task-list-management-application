// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appBackgroundImportant]'
// })
// export class BackgroundImportantDirective {

//   constructor() { }

// }
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBackgroundImportant]'
})
export class BackgroundImportantDirective implements OnChanges {
  @Input('appBackgroundImportant') important!: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    if (this.important) {
      this.elementRef.nativeElement.style.backgroundColor = '#FFAD89';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '';
    }
  }
}
