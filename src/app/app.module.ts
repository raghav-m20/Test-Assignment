import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, UserDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
