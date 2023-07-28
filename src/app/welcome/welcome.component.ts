import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Color } from '../store/models/color';
import { Constants } from '../config/constants';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  colors: Color[];
  constructor(private userService: UserService, private constants: Constants) {
    this.colors = this.constants.COLORS;
  }
  selectColor(color: Color) {
    this.userService.updateUserColor(color);
  }
}
