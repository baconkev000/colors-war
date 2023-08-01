import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Color } from '../store/models/color';
import { COLORS } from '../config/constants';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  colors: Color[] = COLORS;
    constructor(private userService: UserService) {
  }
  selectColor(color: Color) {
    this.userService.updateUserColor(color);
  }
  openLoginModal() {
    this.userService.toggleLoginModal()
  }
}
