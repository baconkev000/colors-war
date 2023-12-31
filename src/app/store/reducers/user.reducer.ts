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
    color: { name: 'gray', color: 'rgb(100 116 139)'},
    isAdmin: false,
    loggedIn: false,
    loggingIn: false,
  })
};

export function userReducer(userState = initialState, action: any):
  UserState{
    switch (action.type) {
      case UserActionTypes.ACTION_LOGOUT:
        return {
          ...userState,
          user: initialState.user
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
            loggedIn: userState.user.loggedIn,
            loggingIn: userState.user.loggingIn
          })
        };
      case UserActionTypes.ACTION_UPDATE_LOGGING_IN_STATUS:
        return {
          ...userState,
          user: new User({
            id: userState.user.id,
            name: userState.user.name,
            userName: userState.user.userName,
            phone: userState.user.phone,
            color: userState.user.color,
            isAdmin: userState.user.isAdmin,
            loggedIn: userState.user.loggedIn,
            loggingIn: !userState.user.loggingIn,
          })
        }
      default:
        return userState;
    }
}

export const selectUserState = (state: any) => state.userState;
export const selectUser = createSelector(selectUserState, (state) => state.user);