import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  currentUser : User
  constructor(private userService: UserService) { }

  login(username : string, password : string){
    return new Promise<User>((res, rej) => {
      this.currentUser = this.userService.getUserByUserAndPass(username, password)
        res(this.userService.getUserByUserAndPass(username, password))  
    })
  }

  logout(){
    this.currentUser = null
  }
}
