import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profileForm : FormGroup
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  mode : string;
  fileBlob : Blob
  

  list_disabledField = {
    username : true,
    firstname : true,
    lastname : true,
    sexe : true,
    date_of_birth : true,
    profil_image : true
  }
    

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      username: new FormControl({value : "", disabled : this.list_disabledField.username}, Validators.required),
      firstname: new FormControl({value : "", disabled : this.list_disabledField.firstname}, Validators.required),
      lastname: new FormControl({value : "", disabled : this.list_disabledField.lastname}, Validators.required),
      sexe: new FormControl({value : "", disabled : this.list_disabledField.sexe}, Validators.required),
      date_of_birth: new FormControl({value : null, disabled : this.list_disabledField.date_of_birth}, Validators.required),
      profil_image : new FormControl({value : null, disabled : this.list_disabledField.profil_image}, Validators.required)     
    })
    this.testFile()
  }

  
  editUsername(bool : boolean){
    this.list_disabledField.username = bool
    if(!this.list_disabledField.username) {
      this.profileForm.controls['username'].enable();
     } else {
        this.profileForm.controls['username'].disable();
      }
  }
  editLastName(bool : boolean){
    this.list_disabledField.lastname = bool
    if(!this.list_disabledField.lastname) {
      this.profileForm.controls['lastname'].enable();
     } else {
        this.profileForm.controls['lastname'].disable();
      }
  }
  editFirstName(bool : boolean){
    this.list_disabledField.firstname = bool
    if(!this.list_disabledField.firstname) {
      this.profileForm.controls['firstname'].enable();
     } else {
        this.profileForm.controls['firstname'].disable();
      }
  }
  editSexe(bool : boolean){
    this.list_disabledField.sexe = bool
    if(!this.list_disabledField.sexe) {
      this.profileForm.controls['sexe'].enable();
     } else {
        this.profileForm.controls['sexe'].disable();
      }
  }
  editDate(bool : boolean){
    this.list_disabledField.date_of_birth = bool
    if(!this.list_disabledField.date_of_birth) {
      this.profileForm.controls['date_of_birth'].enable();
     } else {
        this.profileForm.controls['date_of_birth'].disable();
      }
  }

  editProfileImage(bool : boolean){
    this.list_disabledField.profil_image = bool
    if(!bool){
      this.profileForm.controls['profil_image'].enable();
      this.fileInputManage()
    }
    else{
      this.profileForm.controls['profil_image'].disable();
    }
  }
  handleDateOpenChange(open: boolean): void {
    if(this.profileForm.get('date_of_birth').value)
        console.log(this.profileForm.get('date_of_birth').value.toLocaleDateString());
  }

  fileInputManage(){
    document.getElementById('profil').click()
  }

  testFile() {
    let id = document.getElementById("profil");
    let target = document.getElementById("target");
    this.showImage(id, target);
  }

  showImage(src, target) {
    let fr = new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function (e) {
      target.src = this.result;
    };
    src.addEventListener("change", () => {
      fr.readAsDataURL(src.files[0]);
      this.fileBlob = new Blob([src.files[0]], { type: 'application/image' })
    })
  }
  onSubmit(){
    this.editUsername(true)
    this.editLastName(true)
    this.editFirstName(true)
    this.editDate(true)
    this.editSexe(true)
    this.editProfileImage(true)
    console.log("fghgjh")
  }

}
