import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState, selectUser } from './store/reducers/user.reducer';
import { User } from './store/models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  title = 'colors-war';
  user$: User;
  userBackgroundColor: string | undefined;
  constructor(private store: Store<UserState>) {
    this.store.pipe(select(selectUser)).subscribe(val => { this.user$ = val; this.userBackgroundColor = `bg-[${val.color}]` })
  }
  }