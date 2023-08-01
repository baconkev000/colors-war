import { Component } from '@angular/core';
import { ColorGroup } from '../store/models/colorGroup';
import { Store, select } from '@ngrx/store';
import { selectColorGroup } from '../store/reducers/color-group.reducer';
import { selectUser } from '../store/reducers/user.reducer';
import { Color } from '../store/models/color';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  orderedColorGroup: ColorGroup[];
  userColor: Color;
  constructor(private colorGroupStore: Store,private userStore: Store) {
    this.colorGroupStore.pipe(select(selectColorGroup)).subscribe(colorGroup => {
      this.orderedColorGroup = this.sortColorGroups(colorGroup)
    })
        this.userStore.pipe(select(selectUser)).subscribe(user => { this.userColor = user.color.color; })

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
