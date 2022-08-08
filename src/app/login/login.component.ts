import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  openChild = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.getForm();
  }
  getForm() {
    this.loginForm = this.fb.group({
      name : ['', [Validators.required, this.validateName]],
      password : ['', [Validators.required, this.validatePasswordSpace]]
    })
  }

  loginUser() {
    this.openChild = true;
    console.log('user logged in')
  }

  validateName(c : FormControl) {
    let nameRegex = new RegExp(/^[A-Za-z]+$/);
    if(c.value) {
      if(nameRegex.test(c.value)){
        return null;
      }
      else {
        return {
          nameError : {
            message : 'Please enter a valid name'
          }
        }
      }
    }
    else {
      return null
    }
  }

  validatePasswordSpace(c : FormControl) {
    let regex = new RegExp(/^[A-Za-z0-9!@#$%^&*]{8,20}$/);
    if(c.value) {
      if(regex.test(c.value)) {
        return null;
      }
      else {
        return {
          passErr : {
            message : "Please enter a valid password"
          }
        }
      }
    }
    else {
      return null;
    }
  }

  getData(event) {
    this.openChild = event;
  }
 
}