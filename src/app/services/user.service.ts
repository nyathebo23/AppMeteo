import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { DbmanagerService } from './dbmanager.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  error :string
  constructor(private dbmanagerService : DbmanagerService) { 

  }

  register(user: User){
    this.dbmanagerService.saveUser(user, () => {
      this.error = "This Username already exist"
    })
  }

  // getAllUser() : User[]{
  //   let listUser= new Array<User>()
  //     return listUser
  // }

  // getUserByUserAndPass(username:string, password:string) : User{
  //     return new User('','','','','',new Blob(),'');
  // }

  // getUserByUsername(username:string) : User{
  //     return new User('','','','','',new Blob(),'')
  // }

}
