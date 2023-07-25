import { Component } from '@angular/core';
import { LogInService } from '../services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  title: string = "Color Wars"
  loginOrOutText: string;

  constructor(private logInService: LogInService) {
    this.loginOrOutText = this.logInService.getLoginOrOutText();
  }
  
}
