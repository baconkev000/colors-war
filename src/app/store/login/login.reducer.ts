import { createReducer, on } from '@ngrx/store';
import { logInOrOut } from './login.actions';

export const initialState = false;

export const loginReducer = createReducer(
  initialState,
  on(logInOrOut, (state) => !state),
);
