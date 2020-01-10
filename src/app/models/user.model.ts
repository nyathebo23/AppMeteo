
export class User{
    name : string;
    surname : string;
    date_naissance : string;
    sexe:string
    username : string;
    password : string;
    profil : Blob;

    constructor(name : string, surname: string, date_naissance:string, username:string, password:string, profil:Blob, sexe:string){
      this.name=name
      this.surname=surname
      this.date_naissance=date_naissance
      this.username=username
      this.password=password
      this.profil=profil
      this.sexe = sexe
    }
  }