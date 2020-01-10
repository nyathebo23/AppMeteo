import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHourItemComponent } from './weather-hour-item.component';

describe('WeatherHourItemComponent', () => {
  let component: WeatherHourItemComponent;
  let fixture: ComponentFixture<WeatherHourItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHourItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
