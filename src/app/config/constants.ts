import { Injectable } from "@angular/core"
import { Color } from "../store/models/color";

@Injectable({ providedIn: 'root' })
export class Constants {
    public readonly API_ENDPOINT: string = 'https://randomuser.me/api/';
    public readonly API_MOCK_ENDPOINT: string = '';
    public readonly COLORS: Color[] = [
        { name: 'Red', color: '#ad3232' },
        { name: 'Orange', color: '#ad6732' },
        { name: 'Yellow', color: '#a9ad32' },
        { name: 'Green', color: '#32ad40' },
        { name: 'Blue', color: '#32a3ad' },
        { name: 'Indigo', color: '#3236ad' },
        { name: 'Violet', color: '#ad32a9' }];

}