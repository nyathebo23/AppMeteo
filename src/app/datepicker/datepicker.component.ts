import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  constructor() { }

  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  mode : string;
  value: Date;

    handleDateOpenChange(open: boolean): void {
      if(this.value)
        console.log(this.value.toLocaleDateString());
      
    }

}
