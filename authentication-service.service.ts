import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { DbmanagerService } from './dbmanager.service';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  currentUser : User
  error : string
  constructor(private userService: UserService, private dbmanagerService : DbmanagerService) { }

  login(username : string, password : string){
    return new Promise<User>((res, rej) => {
      this.dbmanagerService.checkUser(username, password, ()=> {
        console.log("sfsddfdfsd")
      },
      (user: User)=> {
        this.currentUser = user
        res(user)
      })
      // this.currentUser = this.userService.getUserByUserAndPass(username, password)
      //   res(this.userService.getUserByUserAndPass(username, password))  
    })
  }

  logout(){
    this.currentUser = null
  }
}
