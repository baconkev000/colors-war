import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserState, selectUser } from '../store/reducers/user.reducer';
import { User } from '../store/models/user';
import { Store , select} from '@ngrx/store';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  constructor(private userService: UserService, private store: Store<UserState>) {
  }
  selectColor(color: string) {
    this.userService.updateUserColor(color);
    this.store.pipe(select(selectUser)).subscribe(val => { console.log(val.color)})
  }
}
