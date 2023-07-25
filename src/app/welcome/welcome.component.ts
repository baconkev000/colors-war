import { Component } from '@angular/core';
import { LogInService } from '../services/login.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  colorSelected: string | undefined = undefined;
  constructor(private loginService: LogInService) {
    
  }
  selectColor() {
    
  }
}
