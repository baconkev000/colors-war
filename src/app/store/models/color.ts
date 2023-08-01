export class Color {
  name: string;
  color: string;
  altColor: string;
  
  constructor(data: any) {
    Object.assign(this, data);
  }
}