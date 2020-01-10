import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherActualLocationComponent } from './weather-actual-location.component';

describe('WeatherActualLocationComponent', () => {
  let component: WeatherActualLocationComponent;
  let fixture: ComponentFixture<WeatherActualLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherActualLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherActualLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
