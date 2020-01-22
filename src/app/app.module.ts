import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherHourItemComponent } from './weather-hour-item/weather-hour-item.component';
import { WeatherActualLocationComponent } from './weather-actual-location/weather-actual-location.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatepickerComponent } from './datepicker/datepicker.component' ;
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { AdressesRegisteredComponent } from './adresses-registered/adresses-registered.component';
import { UserService } from './services/user.service';
import { LocationService } from './services/location.service';
import { HomeComponent } from './home/home.component';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'location',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'pays', keypath: 'pays', options: { unique: false } },
      { name: 'region', keypath: 'region', options: { unique: false } },
      { name: 'ville', keypath: 'ville', options: { unique: false } }
    ]
  }]
};


@NgModule({
  declarations: [
    AppComponent,
    WeatherHourItemComponent,
    WeatherActualLocationComponent,
    LoginComponent,
    SignupComponent,
    DatepickerComponent,
    PictureUploadComponent,
    AdressesRegisteredComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [{provide: NZ_I18N, useValue: en_US},
              UserService,
              LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
