import { Component, OnInit, Input, importProvidersFrom } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public items$: any;
  // @Input() id?: string;
  // @Input() title?: string;
  // @Input() text?: string;
  // @Input() important?: boolean;
  // @Input() date_end?: Date;


  constructor(private service: DataService){

  }
ngOnInit() {
  this.getAll();
}

// getAll(){
//   this.service.getAll().subscribe(response => {
   
//     this.items$ = response; 
//   });
// }
getAll() {
  this.service.getAll().subscribe(
    response => {
      this.items$ = response;
      console.log(this.items$);
    },
    error => {
      console.log('Błąd podczas pobierania danych:', error);
    }
  );
}

deleteTask(id: string) {
  this.service.deleteTask(id).subscribe(() => {
    this.getAll();
  });
}

}