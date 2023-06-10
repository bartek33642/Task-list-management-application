import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  template: `<textarea class="textarea-component" id="text">{{ inputValue | textFilter }}</textarea>`
})
export class AddTaskComponent {
  inputValue: string = ''; 

  public task = {
    important: false,
    title: '',
    text: '',
    date_end: new Date(),
    archive: false

  };
  constructor(private dataService: DataService, public router: Router) {
  }

  addToTask() {
    this.dataService.addTask(this.task).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/task-list']);
  }

}
