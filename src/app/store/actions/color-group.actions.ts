import { Action } from "@ngrx/store"
import { ColorGroup } from "../models/colorGroup"

export enum ColorGroupActionTypes {
    ACTION_UPDATE_COLOR_GROUP_USERS = '[App Component] Update Color Group Users',
}

export class ACTION_UPDATE_COLOR_GROUP_USERS implements Action {
    readonly type = ColorGroupActionTypes.ACTION_UPDATE_COLOR_GROUP_USERS

    constructor(public payload: { userID: number, action: number, newColorGroup: ColorGroup, oldColorGroup: ColorGroup }) { }
}