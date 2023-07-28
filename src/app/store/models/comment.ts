export class Comment {
    userID: number;
    description: string;

    constructor(data: any) {
    Object.assign(this, data);
  }
}