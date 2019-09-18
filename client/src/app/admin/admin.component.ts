import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AdminService } from '../sharedModule/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private flashMessage:FlashMessagesService,
    private adminService:AdminService) { 
      this.adminForm = this.formBuilder.group({
        'username': ['',Validators.required],
        'password': ['',Validators.required]
      });
  }

  ngOnInit() {
  }

  get f() { return this.adminForm.controls; }

  validateAdmin(){
    var flashMessage=this.flashMessage;
    if(this.adminService.admin( this.adminForm.get('username').value , this.adminForm.get('password').value)){
      this.flashMessage.show('You are logged in as admin', {
        cssClass: 'alert-success',
        timeout: 1000});
      this.router.navigate(['adminBooks']);
    }  
    else{
      this.flashMessage.show('Wrong username/password', {
        cssClass: 'alert-danger',
        timeout: 1000});
      this.router.navigate(['/admin']);
    }
  }

}
