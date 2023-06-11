// import { Component } from '@angular/core';

// @Component({
//   selector: 'edit-task',
//   templateUrl: './edit-task.component.html',
//   styleUrls: ['./edit-task.component.css']
// })
// export class EditTaskComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'edit-task',
//   templateUrl: './edit-task.component.html',
//   styleUrls: ['./edit-task.component.css']
// })
// export class EditTaskComponent implements OnInit {
//   public task: any = {};

//   constructor(
//     private route: ActivatedRoute,
//     private service: DataService
//   ) {}

//   ngOnInit() {
//     const taskId = this.route.snapshot.paramMap.get('id');
//     if (taskId) {
//       this.getTaskById(taskId);
//     }
//   }

//   getTaskById(id: string) {
//     this.service.getById(id).subscribe(
//       (response: any) => {
//         this.task = response;
//       },
//       (error: any) => {
//         console.log('Błąd podczas pobierania danych:', error);
//       }
//     );
//   }

//   updateTask() {
//     this.service.updateTask(this.task).subscribe(
//       (response: any) => {
//         console.log('Zadanie zostało zaktualizowane:', response);
//         // Tutaj możesz dodać odpowiednią obsługę po zaktualizowaniu zadania, np. przekierowanie do listy zadań
//       },
//       (error: any) => {
//         console.log('Błąd podczas aktualizacji zadania:', error);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public taskId: string = '';
  public task: any;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.taskId = id;
      this.service.getById(id).subscribe((task: any) => {
        this.task = task;
      });
    }
  }

  getTaskById(id: string) {
    this.service.getById(id).subscribe(
      (response: any) => {
        this.task = response;
      },
      (error: any) => {
        console.log('Błąd podczas pobierania danych:', error);
      }
    );
  }

  updateTask() {
    this.service.updateTask(this.taskId, this.task).subscribe(
      (response: any) => {
        console.log('Zadanie zostało zaktualizowane:', response);
        // Tutaj możesz dodać odpowiednią obsługę po zaktualizowaniu zadania, np. przekierowanie do listy zadań
        this.router.navigate(['/task-list']);
      },
      (error: any) => {
        console.log('Błąd podczas aktualizacji zadania:', error);
      }
    );
  }
}
