import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
}
