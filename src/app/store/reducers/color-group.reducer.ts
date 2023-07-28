import { ColorGroupActionTypes } from '../actions/color-group.actions';
import { createSelector } from '@ngrx/store';
import { ColorGroup } from '../models/colorGroup';
import { Color } from '../models/color';

export interface ColorGroupState {
  colorGroups: ColorGroup[];
}
const COLORS: Color[] = [
        { name: 'Red', color: '#ad3232' },
        { name: 'Orange', color: '#ad6732' },
        { name: 'Yellow', color: '#a9ad32' },
        { name: 'Green', color: '#32ad40' },
        { name: 'Blue', color: '#32a3ad' },
        { name: 'Indigo', color: '#3236ad' },
        { name: 'Violet', color: '#ad32a9' }];
        
const initialState: ColorGroupState = {
  // initial users and comments should be populated from db
  colorGroups: COLORS.map((color: Color) => new ColorGroup({ color: color, users:[], comments:[] }))
}

// find and update the user arry of the two color groups being updated
// update new color group by adding user
// update old color group by removing user
// get color groups then filter for specific group to update then update

export function colorGroupReducer(colorGroupState = initialState, action: any):
  ColorGroupState{
    switch (action.type) {
      case ColorGroupActionTypes.ACTION_UPDATE_COLOR_GROUP_USERS:
        return {
          ...colorGroupState,
          colorGroups: updateColorGroup(colorGroupState, action.payload)
        };

      default:
        return colorGroupState;
    }
}

const updateColorGroup = (state: ColorGroupState, payload: any) => {
  // get new and old color group indexes
  const newColorGroupIndex: number = state.colorGroups.findIndex((colorGroup: ColorGroup) => colorGroup === payload.newColorGroup);
  const oldColorGroupIndex: number = state.colorGroups.findIndex((colorGroup: ColorGroup) => colorGroup === payload.oldColorGroup);

  // update the new and old color groups with updated user lists
  state.colorGroups[newColorGroupIndex].users.push(payload.user);
  state.colorGroups[oldColorGroupIndex].users = state.colorGroups[oldColorGroupIndex].users.filter((user: number) => user !== payload.userID);
  return state.colorGroups;
}

export const selectColorGroupsState = (state: any) => state.colorGroupState;
export const selectColorGroup = createSelector(selectColorGroupsState, (state) => state.colorGroup);
2