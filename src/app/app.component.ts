import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'colors-war';
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<{ loggedIn: boolean }>) {
    this.loggedIn$ = store.select('loggedIn');
  }

}
