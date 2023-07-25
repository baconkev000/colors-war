import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { Observable } from 'rxjs';
import { logInOrOut, logginIn } from '../store/login/login.actions';
import { Store } from '@ngrx/store';


@Injectable({ providedIn: 'root' })
export class LogInService {
  loggedIn$: Observable<boolean>;

    constructor(private http: HttpClient, private constantService: Constants, private store: Store<{ loggedIn: boolean }>) { 
      this.loggedIn$ = store.select('loggedIn');
    }
  
  logInOrOut() {
    // updates the login state of a user
    this.store.dispatch(logInOrOut());
  }
  updateLoggingIn() {
    // update the logging in state of the app to either be logging in or not
    this.store.dispatch(logginIn());
  }
  getLoginStatus() {
    // gets the login status of a user
    return this.loggedIn$;
  }
  getLoginOrOutText() {
    // gets the login state of a user
    // @returns a string of login or logout
    if (this.loggedIn$) {
        return 'Login'
    } else {
        return 'Logout'
    }
  }
}