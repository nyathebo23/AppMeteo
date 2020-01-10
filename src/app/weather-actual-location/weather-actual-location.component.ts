import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-actual-location',
  templateUrl: './weather-actual-location.component.html',
  styleUrls: ['./weather-actual-location.component.scss']
})

export class WeatherActualLocationComponent implements OnInit {

  temperature : string
  date : Date
  hour : string
  humidite : string
  pression : string
  adresse : string
  img_url:string
  
  constructor() {

   }

  ngOnInit() {
    this.temperature = '50°'
    this.date = new Date()
    this.humidite = '80%'
    this.pression = '120 bar'
    this.adresse = 'Yaounde, Cameroun'
  }

}
