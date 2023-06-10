import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.css']
})
export class OneTaskComponent implements OnInit{
  @Input() title?: string;
  @Input() important?: boolean;
  @Input() text?: string;
  @Input() date_end?: Date; 
  @Input() id?: string;

ngOnInit(){

}

}
