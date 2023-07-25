import { Action } from "@ngrx/store"

export enum UserActionTypes {
    ACTION_LOGIN = '[App Component] Login Or Out',
    ACTION_LOGOUT = '[App Component] Logging In'
}

export class ACTION_LOGIN implements Action {
    readonly type = UserActionTypes.ACTION_LOGIN
}
export class ACTION_LOGOUT implements Action {
    readonly type = UserActionTypes.ACTION_LOGIN
}