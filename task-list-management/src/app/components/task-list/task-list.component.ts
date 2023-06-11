// import { Component, OnInit, Input, importProvidersFrom } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'task-list',
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.css']
// })
// export class TaskListComponent implements OnInit {

//   public items$: any;
//   // @Input() id?: string;
//   // @Input() title?: string;
//   // @Input() text?: string;
//   // @Input() important?: boolean;
//   // @Input() date_end?: Date;


//   constructor(private service: DataService){

//   }
// ngOnInit() {
//   this.getAll();
// }

// // getAll(){
// //   this.service.getAll().subscribe(response => {
   
// //     this.items$ = response; 
// //   });
// // }
// getAll() {
//   this.service.getAll().subscribe(
//     response => {
//       this.items$ = response;
//       console.log(this.items$);
//     },
//     error => {
//       console.log('Błąd podczas pobierania danych:', error);
//     }
//   );
// }

// deleteTask(id: string) {
//   this.service.deleteTask(id).subscribe(() => {
//     this.getAll();
//   });
// }

// }

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public items$: any[] = [];

  constructor(private service: DataService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
    (response: Object) => {
        this.items$ = response as any[];
        
        this.sortTasks();
      },
      (error: any) => {
        console.log('Błąd podczas pobierania danych:', error);
      }
    );
  }

  sortTasks() {
    this.items$.sort((a, b) => {
      // Sortowanie po atrybucie 'important' (true na górze)
      if (a.important && !b.important) {
        return -1;
      } else if (!a.important && b.important) {
        return 1;
      }

      // Sortowanie po atrybucie 'date_end' (od najwcześniejszej do najpóźniejszej)
      const dateA = new Date(a.date_end);
      const dateB = new Date(b.date_end);

      return dateA.getTime() - dateB.getTime();
    });
  }

  deleteTask(id: string) {
    this.service.deleteTask(id).subscribe(() => {
      this.getAll();
    });
  }
  
  getTaskById(id: string) {
    this.service.getById(id).subscribe(
      (response: Object) => {
        const task = response as any;
        // Tutaj można przekazać pobrane dane do komponentu edycji
      },
      (error: any) => {
        console.log('Błąd podczas pobierania danych:', error);
      }
    );
  }

}
