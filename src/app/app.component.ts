import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppMeteo';
  nb = [1,2,3,8,9,6, 74, 56]
  constructor(){

  }
}
