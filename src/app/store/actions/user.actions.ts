import { Action } from "@ngrx/store"
import { Color } from "../models/color"

export enum UserActionTypes {
    ACTION_LOGIN = '[App Component] Login Or Out',
    ACTION_LOGOUT = '[App Component] Logging In',
    ACTION_UPDATE_COLOR = '[Welcome Component] Update Color',
    ACTION_UPDATE_LOGGING_IN_STATUS = '[App Component] Updat Logging In Status'
}

export class ACTION_LOGIN implements Action {
    readonly type = UserActionTypes.ACTION_LOGIN
}
export class ACTION_LOGOUT implements Action {
    readonly type = UserActionTypes.ACTION_LOGIN
}

export class ACTION_UPDATE_COLOR implements Action {
    readonly type = UserActionTypes.ACTION_UPDATE_COLOR

    constructor(public payload: { color: Color }) { }
}

export class ACTION_UPDATE_LOGGING_IN_STATUS implements Action {
    readonly type = UserActionTypes.ACTION_UPDATE_LOGGING_IN_STATUS
}