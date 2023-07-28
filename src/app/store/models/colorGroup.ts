import { Color } from "./color";
import { Comment } from "./comment";

export class ColorGroup {
    color: Color;
    users: number[];
    comments: Comment[];

    constructor(data: any) {
    Object.assign(this, data);
  }
}