// import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../../services/auth.service';
// import {Router} from "@angular/router";

// @Component({
//   selector: 'register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit{
//   public credentials = {
//     name: '',
//     email: '',
//     password: '',
//     };
  
//     constructor(private authService: AuthService, public router: Router) {
//     }
  
//     ngOnInit() {
//     }
  
//     create() {
//   this.authService.createOrUpdate(this.credentials).subscribe((result) => {
//       return result;
//     });
//     this.router.navigate(['/task-list']);
//     }

//     clearInput(fieldId: string) {
//       this.credentials[fieldId] = '';
//     }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public credentials = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() { }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/task-list']);
  }

  clearInput(fieldId: keyof typeof RegisterComponent.prototype.credentials) {
    this.credentials[fieldId] = '';
  }
}
