import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogInService } from 'src/app/services/login.service';
import { Constants } from 'src/app/config/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private logInService: LogInService){}
  user: any;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    // Call API with username and password
   
    if (this.loginForm.invalid) return;
    try {
      this.logInService.logInOrOut();
      // this.userService.getUser().subscribe((response) => {
      //   // validate and log user in
      //   this.userService.loggedIn = true;
      // })
    } catch {
      // error
    }
  }
}