import { User } from '../models/user';
import { UserActionTypes } from '../actions/user.actions';
import { createSelector } from '@ngrx/store';

export interface UserState {
  user: User;
}
const initialState: UserState = {
  user: new User({
    id: -1,
    name: 'Guest',
    userName: 'Guest',
    phone: '',
    color: undefined,
    isAdmin: false,
    loggedIn: false
  })
};

export function userReducer(userState = initialState, action: any):
  UserState{
    switch (action.type) {
      case UserActionTypes.ACTION_LOGOUT:
        return {
          ...userState,
          user: new User({
            id: -1,
            name: 'Guest',
            userName: 'Guest',
            phone: '',
            color: undefined,
            isAdmin: false,
            loggedIn: false
          })
        };
      case UserActionTypes.ACTION_LOGIN:
        return action.payload;
      case UserActionTypes.ACTION_UPDATE_COLOR:
        return {
          ...userState,
          user: new User({
            id: userState.user.id,
            name: userState.user.name,
            userName: userState.user.userName,
            phone: userState.user.phone,
            color: action.payload.color,
            isAdmin: userState.user.isAdmin,
            loggedIn: userState.user.loggedIn
          })
        }
      default:
        return userState;
    }
}

export const selectUserState = (state: any) => state.userState;
export const selectUser = createSelector(selectUserState, (state) => state.user);