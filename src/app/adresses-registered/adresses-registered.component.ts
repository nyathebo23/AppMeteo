import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-adresses-registered',
  templateUrl: './adresses-registered.component.html',
  styleUrls: ['./adresses-registered.component.scss']
})
export class AdressesRegisteredComponent {

  listLocations = new Array()
  heading: string;
  content: any;
  action: Subject<any> = new Subject();

  constructor(public modalRef: MDBModalRef) { }
  
  onYesClick() {
    this.action.next('yes');
}

  onNoClick() {
    this.action.next('No');
}

}
