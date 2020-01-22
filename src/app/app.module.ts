import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherHourItemComponent } from './weather-hour-item/weather-hour-item.component';
import { WeatherActualLocationComponent } from './weather-actual-location/weather-actual-location.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdressesRegisteredComponent } from './adresses-registered/adresses-registered.component';
import { UserService } from './services/user.service';
import { LocationService } from './services/location.service';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule, MDBModalService } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers/auth-guard.service';
import { DataapiproviderService } from './services/dataapiprovider.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


const appRoutes: Routes = [
  { path: 'home', component:HomeComponent, canActivate : [AuthGuard]},
  { path: 'auth', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path : 'profile', component : ProfilePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherHourItemComponent,
    WeatherActualLocationComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdressesRegisteredComponent,
    ProfilePageComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: NZ_I18N, useValue: en_US},
              UserService,
              LocationService,
              MDBModalService,
              AuthGuard,
              DataapiproviderService
            
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
