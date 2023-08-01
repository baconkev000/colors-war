import { ColorGroupActionTypes } from '../actions/color-group.actions';
import { createSelector } from '@ngrx/store';
import { ColorGroup } from '../models/colorGroup';
import { Color } from '../models/color';
import { COLORS } from 'src/app/config/constants';

export interface ColorGroupState {
  colorGroupsArray: ColorGroup[];
}
        
const initialState: ColorGroupState = {
  // initial users and comments should be populated from db
  colorGroupsArray: COLORS.map((color: Color) => new ColorGroup({ color: color, users: [], comments: [] }))
}

export function colorGroupReducer(colorGroupState = initialState, action: any):
  ColorGroupState{
  switch (action.type) {
      // find and update the user array of the two color groups being updated
      // update new color group by adding user
      // update old color group by removing user
      case ColorGroupActionTypes.ACTION_UPDATE_COLOR_GROUP_USERS:
        return {
          ...colorGroupState,
          colorGroupsArray: updateColorGroup(colorGroupState, action.payload)
        };

      default:
        return colorGroupState;
    }
}

const updateColorGroup = (state: ColorGroupState, payload: any) => {
  // get new and old color group indexes
  const newColorGroupIndex: number = state.colorGroupsArray.findIndex((colorGroup: ColorGroup) => colorGroup === payload.newColorGroup);
  const oldColorGroupIndex: number = state.colorGroupsArray.findIndex((colorGroup: ColorGroup) => colorGroup === payload.oldColorGroup);

  // update the new and old color groups with updated user lists
  state.colorGroupsArray[newColorGroupIndex].users.push(payload.user);
  state.colorGroupsArray[oldColorGroupIndex].users = state.colorGroupsArray[oldColorGroupIndex].users.filter((user: number) => user !== payload.userID);
  return state.colorGroupsArray;
}

export const selectColorGroupsState = (state: any) => state.colorGroupState;
export const selectColorGroup = createSelector(selectColorGroupsState, (state) => state.colorGroupsArray);
