import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = {
	login: '',
	password: ''
  };
  public showPassword: boolean = false;
  public passwordFieldType: string = 'password';

  public logged?: boolean;
  public logout?: boolean;

  constructor(public authService: AuthService,
          	private router: Router) {
  }

  ngOnInit(): void {
  }

  signIn() {
	return this.authService.authenticate(this.credentials).subscribe((result) => {
  	if (!result) {
    	this.logged = false;
  	} else {
    	this.logout = false;
    	this.credentials = {
      	login: '',
      	password: ''
    	};
    	this.router.navigate(['/task-list']);
  	}
	});
  }

  
  clearInput(fieldId: keyof typeof LoginComponent.prototype.credentials) {
    this.credentials[fieldId] = '';
  }

  
}

