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
    color: '',
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
    color: '',
    isAdmin: false,
    loggedIn: false
          })
        };
      case UserActionTypes.ACTION_LOGIN:
        return {
          ...userState,
          user: new User({
                id: -1,
                name: 'Kevin Bacon',
                userName: 'kevinbacon',
                phone: '8017550777',
                color: 'black',
                isAdmin: false,
                loggedIn: true
          })
          /**
           * user: new User({
           * userName: action.payload
           * isAdmin: action.payload,
           * loggedIn: action.payload,})
           */
        }
    }
  return userState;
}

export const selectUserState = (state: any) => state.userState;
export const selectUser = createSelector(selectUserState, (state) => state.user);