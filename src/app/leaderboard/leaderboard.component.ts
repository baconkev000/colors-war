import { Component } from '@angular/core';
import { ColorGroup } from '../store/models/colorGroup';
import { Store, select } from '@ngrx/store';
import { selectColorGroup } from '../store/reducers/color-group.reducer';
import { Color } from '../store/models/color';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  orderedColorGroup: ColorGroup[];
  constructor(private store: Store) {
    this.store.pipe(select(selectColorGroup)).subscribe(colorGroup => {
      this.orderedColorGroup = this.sortColorGroups(colorGroup) })
  }

  sortColorGroups = (colorGroup: ColorGroup[]) => {
    console.log(colorGroup[0].users.length)
    const tempColorGroupArray = [...colorGroup];
    tempColorGroupArray.sort(function (a: ColorGroup, b: ColorGroup) {
       console.log(a,b)
      return a.users.length - b.users.length;
    }
    );
    return tempColorGroupArray
  }
}
