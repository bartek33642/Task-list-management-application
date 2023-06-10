import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.css']
})
export class OneTaskComponent implements OnInit {

  public item: any;

  constructor(private service: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getById(id).subscribe(
        response => {
          this.item = response;
          console.log(this.item);
        },
        error => {
          console.log('Błąd podczas pobierania danych:', error);
        }
      );
    } else {
      console.log('Id is null');
    }
  }
  }
