import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import {AdressesRegisteredComponent} from '../adresses-registered/adresses-registered.component'

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
  
  constructor(private modalService: MDBModalService) { }

  ngOnInit() {
    let inf = {hour : '12:00', temp : '40°', hum : '50%', image_url : '/assets/images/nuage.png'}
    let inf2 = {day : 'LUN' ,temp : '40°', hum : '50%', image_url : '/assets/images/nuage.png'}
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

}
