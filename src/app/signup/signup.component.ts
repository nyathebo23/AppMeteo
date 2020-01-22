import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupForm : FormGroup
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  mode : string;
  fileBlob : Blob
   
  constructor(private formBuilder : FormBuilder, private userService : UserService) { 

  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      date: [null, [Validators.required]],
      profil_image : [null, [Validators.required]]     
    })
    this.testFile()
  }

  handleDateOpenChange(open: boolean): void {
    if(this.signupForm.get('date').value)
        console.log(this.signupForm.get('date').value.toLocaleDateString());
  }

  onSubmit(){
    this.userService.register(new User(this.signupForm.get('firstname').value, this.signupForm.get('lastname').value, this.signupForm.get('date').value
    , this.signupForm.get('username').value, this.signupForm.get('password').value, this.fileBlob, this.signupForm.get('sexe').value ))
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
}