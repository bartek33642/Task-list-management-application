// import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

// @Directive({
//   selector: '[appBackgroundImportant]'
// })
// export class BackgroundImportantDirective implements OnChanges {
//   @Input('appBackgroundImportant') important!: boolean;

//   constructor(private elementRef: ElementRef) {}

//   ngOnChanges() {
//     if (this.important) {
//       this.elementRef.nativeElement.style.backgroundColor = '#FFAD89';
//     } else {
//       this.elementRef.nativeElement.style.backgroundColor = '';
//     }
//   }
// }
import { Directive, ElementRef, Input, OnChanges, Host, Inject, Optional } from '@angular/core';
import { TaskListComponent } from '../components/task-list/task-list.component';

@Directive({
  selector: '[appBackgroundImportant]'
})
export class BackgroundImportantDirective implements OnChanges {
  @Input('appBackgroundImportant') important!: boolean;
  @Input() dateEnd!: Date;

  constructor(
    private elementRef: ElementRef,
    @Host() @Optional() @Inject(TaskListComponent) private taskList: TaskListComponent
  ) {}

  ngOnChanges() {
    if (this.important) {
      this.elementRef.nativeElement.style.backgroundColor = '#a17763';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '';
    }

    if (this.taskList) {
      this.taskList.sortTasks();
    }
  }
}
