import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

  }

  register(user: User){

  }

  getAllUser() : User[]{
    let listUser= new Array<User>()
      return listUser
  }

  getUserByUserAndPass(username:string, password:string) : User{
      return new User('','','','','',new Blob(),'');
  }

  getUserByUsername(username:string) : User{
      return new User('','','','','',new Blob(),'')
  }

}
