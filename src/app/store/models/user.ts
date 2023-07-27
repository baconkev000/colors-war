export class User {
  id: number;
  name: string;
    userName: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    color: string | undefined;
    loggedIn: boolean;
    
  constructor(data: any) {
    Object.assign(this, data);
  }
}