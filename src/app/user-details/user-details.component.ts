import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userForm : FormGroup;
  @Output() gotologin = new EventEmitter<any>()
  userDetails = [
    {
      name : 'Smith',
      mail : 'smith@abc.com',
      contact : 9898989898
    },
    {
      name : 'Joe',
      mail : 'joe@abc.com',
      contact : 9898989898
    },
    {
      name : 'John',
      mail : 'john@abc.com',
      contact : 9898989898
    },
    {
      name : 'Kayla',
      mail : 'kayla@abc.com',
      contact : 9898989898
    },
    {
      name : 'Bob',
      mail : 'bob@abc.com',
      contact : 9898989898
    }
  ]
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      users : this.fb.array([])
    })
    this.getUsers()
  }

  getUsers() {
    const control = <FormArray>this.userForm.get('users');
    for(let user of this.userDetails) {
      const group = this.fb.group({
        name : [user.name, [Validators.required, this.validateName]],
        email : [user.mail, [Validators.required, this.validateEmail]],
        contact : [user.contact, [Validators.required, this.validateContact]]
      })
      control.push(group)
    }
  }

  initiatForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, this.validateName]],
      email: ['', [Validators.required, this.validateEmail]],
      contact: ['', [Validators.required,this.validateContact]]
    });
  }

  
  get getFormData(): FormArray {
    return <FormArray>this.userForm.get('users');
  }

  addUser() {
    const control = <FormArray>this.userForm.get('users');
    control.push(this.initiatForm());
  }

  deleteUser(index: number) {
    const control = <FormArray>this.userForm.get('users');
    control.removeAt(index);
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

  validateContact(c : FormControl) {
    let regex = new RegExp(/^[0-9]{10}$/);
    if(c.value) {
      if(regex.test(c.value)){
        return null;
      }
      else {
        return {
          contactErr : {
            message : 'Please enter a contact number'
          }
        }
      }
    }
    else {
      return null
    }
  }

  validateEmail( c : FormControl) {
    let regex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    if(c.value) {
      if(regex.test(c.value)){
        return null;
      }
      else {
        return {
          emailErr : {
            message : 'Please enter a email'
          }
        }
      }
    }
    else {
      return null
    }
  }

  navigateToLogin(){
    this.gotologin.emit(false);
  }

}