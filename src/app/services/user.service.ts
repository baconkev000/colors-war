import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { Store } from '@ngrx/store';
import { ACTION_UPDATE_COLOR } from '../store/actions/user.actions';

@Injectable({ providedIn: 'root' })
export class UserService {
  user: User | undefined;
  loggedIn = false;
  constructor(private http: HttpClient, private constantService: Constants,  private store: Store<{ loggedIn: boolean }>) { }
  userLogin() {
    return false;
  }
  getUserInfo(password: string, userName: string | undefined = undefined, email: string | undefined = undefined) {
    if (this.user === undefined) {
      return this.user;
    } else {
      // get user from api
      if (userName === undefined && email === undefined) {
        
      }
    }
  }
  updateUserColor(color: string) {
      this.store.dispatch(new ACTION_UPDATE_COLOR({ color: color }));
  }
  public getUser(url: string = this.constantService.API_ENDPOINT, options?: any) {
    // const headers = new HttpHeaders({'myHeader: "headertext"})
        return this.http.get(url, options);
    }
}