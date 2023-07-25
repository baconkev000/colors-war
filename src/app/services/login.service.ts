import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { Observable } from 'rxjs';
import { logInOrOut } from '../store/login/login.actions';
import { Store } from '@ngrx/store';


@Injectable({ providedIn: 'root' })
export class LogInService {
  loggedIn$: Observable<boolean>;

    constructor(private http: HttpClient, private constantService: Constants, private store: Store<{ loggedIn: boolean }>) { 
      this.loggedIn$ = store.select('loggedIn');
  }
  logInOrOut() {
    this.store.dispatch(logInOrOut());
  }
  getLoginStatus() {
    return this.loggedIn$;
  }
  getLoginOrOutText() {
    if (this.loggedIn$) {
        return 'Login'
    } else {
        return 'Logout'
    }
  }
}