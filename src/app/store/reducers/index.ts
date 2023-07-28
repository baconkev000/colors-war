import { ActionReducerMap } from "@ngrx/store";
import { userReducer, UserState } from "./user.reducer";
import { colorGroupReducer, ColorGroupState } from "./color-group.reducer";

interface AppState {
  userState: UserState;
  colorGroupState: ColorGroupState
}

export const reducers: ActionReducerMap<AppState> = {
  userState: userReducer,
  colorGroupState: colorGroupReducer,

};
