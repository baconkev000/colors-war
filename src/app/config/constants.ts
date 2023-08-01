import { Injectable } from "@angular/core"
import { Color } from "../store/models/color";

@Injectable({ providedIn: 'root' })
export class Constants {
    public readonly API_ENDPOINT: string = 'https://randomuser.me/api/';
    public readonly API_MOCK_ENDPOINT: string = '';
}

export const COLORS: Color[] = [
        { name: 'Red', color: '#ad3232', altColor: 'white'},
        { name: 'Orange', color: '#ad6732', altColor: 'white' },
        { name: 'Yellow', color: '#a9ad32', altColor: 'black' },
        { name: 'Green', color: '#32ad40', altColor: 'black' },
        { name: 'Blue', color: '#32a3ad', altColor: 'black' },
        { name: 'Indigo', color: '#3236ad', altColor: 'white' },
        { name: 'Violet', color: '#ad32a9', altColor: 'white' }];