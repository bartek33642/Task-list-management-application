import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public items$: any[] = [];

  constructor(private service: DataService, private location: Location) {}

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
      // Sortowanie po atrybucie 'important'
      if (a.important && !b.important) {
        return -1;
      } else if (!a.important && b.important) {
        return 1;
      }

      // Sortowanie po atrybucie 'date_end' 
      const dateA = new Date(a.date_end);
      const dateB = new Date(b.date_end);

      return dateA.getTime() - dateB.getTime();
    });
  }


  deleteTask(id: string): void {
    const confirmDelete = window.confirm('Do you want to delete this task?');
    if (confirmDelete) {
      this.service.deleteTask(id).subscribe(() => {
        this.getAll();
      }, () => {
        window.location.reload();
      });
    }
  }

  
  
  getTaskById(id: string) {
    this.service.getById(id).subscribe(
      (response: Object) => {
        const task = response as any;
      },
      (error: any) => {
        console.log('Błąd podczas pobierania danych:', error);
      }
    );
  }

}
