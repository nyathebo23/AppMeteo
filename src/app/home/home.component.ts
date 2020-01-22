import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import {AdressesRegisteredComponent} from '../adresses-registered/adresses-registered.component'
import {URLS_IMAGES_FOR_ITEMS}  from '../utils/urls_images_provider'
import { DataapiproviderService } from '../services/dataapiprovider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listInfosHour= new Array()
  listInfosDay = new Array()
  daysContract = new Array('LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM')
  days = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche")
  modalRef: MDBModalRef
  modeAffiche : string
  dayChosen : string

  
  constructor(private modalService: MDBModalService, private dataApiProviderService : DataapiproviderService) { }

  ngOnInit() {
    let inf = {hour : '12:00', temp : '40°', hum : '50%', image_url : URLS_IMAGES_FOR_ITEMS.cloud_with_sun}
    let inf2 = {day : 'LUN' ,temp : '40°', hum : '50%', image_url : URLS_IMAGES_FOR_ITEMS.thunderstorm}
    for(let i = 0 ; i<8; i++){
      this.listInfosHour.push(inf)
    }
    for(let i=0; i<7; i++){
      this.listInfosDay.push(inf2)
    }
    this.dayChosen = this.days[new Date().getDay()-1]
    this.modeAffiche = 'hour'
  }

  setHoursInfosMeteo(){
    this.modeAffiche = 'hour'
  }

  setDaysInfosMeteo(){
    this.modeAffiche = 'day'
  }

  getImageUrlToWeather(main : string,hour : number, description? : string){
    switch (main){
      case "Rain" :
        if(hour < 19)
          return URLS_IMAGES_FOR_ITEMS.rain_with_sun
        return URLS_IMAGES_FOR_ITEMS.rain
      case "Thunderstorm":
        return URLS_IMAGES_FOR_ITEMS.thunderstorm
      case "Drizzle":
        return URLS_IMAGES_FOR_ITEMS.high_rain
      case "Clear":
        if(Number((new Date()).getHours.toString) < 19)
          return URLS_IMAGES_FOR_ITEMS.sun
        else 
          return URLS_IMAGES_FOR_ITEMS.moon
      case "Snow":
        return URLS_IMAGES_FOR_ITEMS.snow
      case "Clouds":
        if(description === "few clouds: 11-25%" && hour < 19 )
          return URLS_IMAGES_FOR_ITEMS.cloud_with_sun
        else if(description === "few clouds: 11-25%" && hour >= 19)
          return URLS_IMAGES_FOR_ITEMS.cloud_with_moon
        else {
          return URLS_IMAGES_FOR_ITEMS.cloud
        }
      }
  }
}

