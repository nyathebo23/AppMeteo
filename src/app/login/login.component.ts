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
      this.router.navigate(['/']);
  }
  }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }); 
      this.loginForm.get('username').valueChanges.subscribe((data) => {
        console.log(this.loginForm.get('username').touched, this.loginForm.get('username').dirty, this.loginForm.get('username').hasError('required'))
      })
    }

    onSubmit(){
        this.authenticationService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).
        then(data => {
          if(data){
            this.router.navigate(['/'])
          }
          else{
            this.error = 'Username or password is incorrect'
          }
        })
    }

}
 

