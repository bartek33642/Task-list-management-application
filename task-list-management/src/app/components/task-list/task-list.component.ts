import { Component, OnInit, Input, importProvidersFrom } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public items$: any;

  // @Input() title?: string;
  // @Input() important?: boolean;
  // @Input() text?: string;
  // @Input() date_end?: Date; 
  // @Input() id?: string;

  constructor(private service: DataService){

  }
ngOnInit() {
  
}

getAll(){
  this.service.getAll().subscribe(response => {
    this.items$ = response;
  });
}


}