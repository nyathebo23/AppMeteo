import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../services/authentication-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error : string

  constructor(private formBuilder: FormBuilder, private authenticationService : AuthenticationService, private router:Router) {
    if (this.authenticationService.currentUser) { 
      this.router.navigate(['home']);
    }
  }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }); 
    }

    onSubmit(){
        this.authenticationService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).
        then(data => {
          if(data){
            this.router.navigate(['home'])
            this.authenticationService.currentUser = data
          }
          else{
            this.error = 'Username or password is incorrect'
          }
        })
    }

}
 

