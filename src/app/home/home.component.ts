import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import {AdressesRegisteredComponent} from '../adresses-registered/adresses-registered.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listInfos= new Array()
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) { }

  ngOnInit() {
    let inf = {hour : '12:00', temp : '40°', hum : '50%', image_url : '/assets/images/nuage.png'}
    for(let i = 0 ; i<8; i++){
      this.listInfos.push(inf)
    }
  }
  openModal() {
    this.modalRef = this.modalService.show(AdressesRegisteredComponent)
  }

}
