import { Injectable } from '@angular/core';
import { User } from '../store/models/user';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { Store } from '@ngrx/store';
import { ACTION_UPDATE_COLOR, ACTION_UPDATE_LOGGING_IN_STATUS } from '../store/actions/user.actions';
import { Color } from '../store/models/color';

@Injectable({ providedIn: 'root' })
export class UserService {
  user: User | undefined;
  loggedIn = false;
  constructor(private http: HttpClient, private constantService: Constants,  private store: Store<{ loggedIn: boolean }>) { }
  userLogin(email: string, password: string) {
    // get user from api using email and password
    // return loggedin = true if success else loggedin = false

    return false;
  }
  toggleLoginModal() {
    this.store.dispatch(new ACTION_UPDATE_LOGGING_IN_STATUS())
  }
  // getUserInfo(password: string, userName: string | undefined = undefined, email: string | undefined = undefined) {
  //   if (this.user === undefined) {
  //     return this.user;
  //   } else {
  //     // get user from api
  //     if (userName === undefined && email === undefined) {
        
  //     }
  //   }
  // }
  updateUserColor(color: Color) {
      this.store.dispatch(new ACTION_UPDATE_COLOR({color:color}));
  }
  public getUser(url: string = this.constantService.API_ENDPOINT, options?: any) {
    // const headers = new HttpHeaders({'myHeader: "headertext"})
        return this.http.get(url, options);
    }
}