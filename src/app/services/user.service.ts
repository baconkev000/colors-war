import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';

@Injectable({ providedIn: 'root' })
export class UserService {
  user: User | undefined;
  loggedIn = false;
  constructor(private http: HttpClient, private constantService: Constants) { }
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
  public getUser(url: string = this.constantService.API_ENDPOINT, options?: any) {
    // const headers = new HttpHeaders({'myHeader: "headertext"})
        return this.http.get(url, options);
    }
}


/**
 * Test User data
 * 
 * {
    email: 'k@k.com',
    password: 'testPassword123!',
    loggedIn: false,
  };
 */