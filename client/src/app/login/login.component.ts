import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { LoginService } from '../sharedModule/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  email:string;
  password:string;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService:LoginService,
              private flashMessage:FlashMessagesService
              ) { 
      this.loginForm = this.formBuilder.group({
        'email': ['',[Validators.required, Validators.email]],
        'password': ['',Validators.required]
      });
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }

  validateLogin(){
    if (this.loginForm.invalid) {
      return;
  }
    this.loginService.login(this.loginForm.value).subscribe(data=> {
      var flashMessage=this.flashMessage;
        if(data.success){
          this.loginService.storeUserData(data.token, data.user);
          this.flashMessage.show('You are now logged in', {
            cssClass: 'alert-success',
            timeout: 1000});
           this.router.navigate(['/books']);
      } 
      else{
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 1000});
        this.router.navigate(['/login']);
      }
      });
    }
}
