import { Action } from "@ngrx/store"

export enum UserActionTypes {
    ACTION_LOGIN = '[App Component] Login Or Out',
    ACTION_LOGOUT = '[App Component] Logging In',
    ACTION_UPDATE_COLOR = '[Welcome Component] Update Color'
}

export class ACTION_LOGIN implements Action {
    readonly type = UserActionTypes.ACTION_LOGIN
}
export class ACTION_LOGOUT implements Action {
    readonly type = UserActionTypes.ACTION_LOGIN
}

export class ACTION_UPDATE_COLOR implements Action {
    readonly type = UserActionTypes.ACTION_UPDATE_COLOR

    constructor(public payload: { color: string }) { }
}