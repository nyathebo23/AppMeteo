import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DbmanagerService {


  userList
  openRequest
  constructor() {     
  }
  setUserList(userList){
    this.userList = userList
  }

  saveUser(user : User, cbError){
    this.openRequest = indexedDB.open('db', 4.67);
    let db

    this.openRequest.onupgradeneeded = function(event){
      
        db = event.target.result;

        //Si l'objet de stockage users n'existe pas, on le crée
        if (!db.objectStoreNames.contains('users')){
            db.createObjectStore('users', {keyPath: 'username'});
              }
      };

    this.openRequest.onerror = function(){
        alert('Impossible d\'accéder à IndexedDB');
    };
    
    this.openRequest.onsuccess = function(event){
      
        db = event.target.result;

        let transaction = db.transaction('users', 'readwrite');
        console.log(transaction);
                
        transaction.oncomplete = function(){
            alert('Transaction terminée');
        };
    
        let users = transaction.objectStore('users')
          let ajout = users.add(user);

          ajout.onsuccess = () => { 
              alert('Utilisateur ajouté avec la clef ' + ajout.result);
            }
          ajout.onerror = (error) => {
            console.log(error)
            cbError()
          }
        
      };
  }

  getAll(cb){
    let db 
    
    this.openRequest.onerror = function(){
        alert('Impossible d\'accéder à IndexedDB');
    };
    
    this.openRequest.onsuccess = function(){
        
        db = this.openRequest.result;
        let transaction = db.transaction('users', 'readwrite');
        
        transaction.oncomplete = function(){
            alert('Transaction terminée');
        };
    
        let users = transaction.objectStore('users')
        let userList = users.getAll()
        cb(userList)
      };
  }

  checkUser(username : string, password : string, cbError, cbSuccess){
    this.openRequest = indexedDB.open('db', 4.67);
    let db 
    //Si l'objet de stockage users n'existe pas, on le crée

    
    this.openRequest.onerror = function(){
        alert('Impossible d\'accéder à IndexedDB');
    };
    
    this.openRequest.onsuccess = function(event){
        
        db = event.target.result;
        let transaction = db.transaction('users', 'readwrite');
        
        transaction.oncomplete = function(){
            alert('Transaction terminée');
        };
    
        let users = transaction.objectStore('users')

        let userToCheck = users.get(username)
        userToCheck.onerror = () => {
          cbError()
        }
        userToCheck.onsuccess = () => {
          console.log(userToCheck)
          let user = userToCheck.result
          if(user){
            if(user.password === password){
              cbSuccess(user)
          }
            else{
              cbError()
            }
          }
          else{
            cbError()
          }
         

        }
      };
  }
  modifUser(user : User, cb, username? : string, lastname?:string, firstname? : string, password? : string, sexe? : string, datebirth?:string, profilImage? : Blob){
    let db;

    this.openRequest.onupgradeneeded = function(){
    db = this.openRequest.result;
      };

    this.openRequest.onerror = function(){
        alert('Impossible d\'accéder à IndexedDB');
    };
    
    this.openRequest.onsuccess = function(){
        db = this.openRequest.result;
        let transaction = db.transaction('users', 'readwrite');
        
        transaction.oncomplete = function(){
            alert('Transaction terminée');
        };
    
        let users = transaction.objectStore('users')
        
        let user0 = users.get(user.username);

        
        user0.onsuccess = () => { 
           let resultUser =  user0.result
           if(username)
              resultUser.username = username
           if(password)
              resultUser.password = password
           if(firstname)
              resultUser.firstname = firstname
           if(lastname)
              resultUser.lastname = lastname
           if(sexe)
              resultUser.sexe = sexe
           if(datebirth)
              resultUser.date_naissance = datebirth
           if(profilImage)
              resultUser.profil = profilImage
           let updateUser = users.put(user)
           updateUser.onerror = (event) => {

           }
           updateUser.onsuccess = (event) => {

           }
          }
      };
  }
}
