import { Component, OnInit } from '@angular/core';
import { LoginService } from '../sharedModule/service/login.service';
import { IUser } from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user?:IUser;
  constructor(
    private loginService:LoginService,
  ) { }

  ngOnInit() {
   this.profile();
  }

  profile(){
    this.loginService.getProfile().subscribe(profile=>{
      this.user=profile.user;
    },
    err=>{
     console.log(err);
    });
  }

}
