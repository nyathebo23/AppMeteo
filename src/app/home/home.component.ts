import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listInfos= new Array()
  constructor() { }

  ngOnInit() {
    let inf = {hour : '12:00', temp : '40°', hum : '50%', image_url : '/assets/images/nuage.png'}
    for(let i = 0 ; i<8; i++){
      this.listInfos.push(inf)
    }
  }

}
