import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './store/models/user';
import { UserState, selectUser } from './store/reducers/user.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'colors-war';
  user$: Observable<any>;
  constructor(private store: Store<UserState>) {
    this.user$ = store.pipe(select(selectUser))
  }

}
