import { Component } from '@angular/core';
import { ColorGroup } from '../store/models/colorGroup';
import { Store, select } from '@ngrx/store';
import { selectColorGroup } from '../store/reducers/color-group.reducer';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  orderedColorGroup: ColorGroup[];
  constructor(private store: Store) {
    this.store.pipe(select(selectColorGroup)).subscribe(val => { console.log(val) })
  }
}
