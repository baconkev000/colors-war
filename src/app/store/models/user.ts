import { Color } from "./color";
export class User {
  id: number;
  name: string;
    userName: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    color: Color;
    loggedIn: boolean;
    loggingIn: false;
    
  constructor(data: any) {
    Object.assign(this, data);
  }
}