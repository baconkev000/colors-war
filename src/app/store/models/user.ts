export class User {
    id: number;
    userName: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    color: string;
    loggedIn: boolean;
    
  constructor(data: any) {
    Object.assign(this, data);
  }
}