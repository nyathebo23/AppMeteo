import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-weather-hour-item',
  templateUrl: './weather-hour-item.component.html',
  styleUrls: ['./weather-hour-item.component.scss']
})
export class WeatherHourItemComponent implements OnInit {

 @Input() hour: Time
 @Input() humidite : string
 @Input() temperature : string
 @Input() image_url: string

  constructor() { }

  ngOnInit() {

  }

}
