import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { IUser } from '../model/user';
import { LoginService } from '../sharedModule/service/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public user:IUser;
  
  public pushRightClass: string;
    constructor(
    private router: Router,
    private loginService:LoginService,
    private flashMessage:FlashMessagesService
    ) {
      this.router.events.subscribe(val => {
        if (
            val instanceof NavigationEnd &&
            window.innerWidth <= 992 &&
            this.isToggled()
        ) {
            this.toggleSidebar();
        }
    });
     
    }

    ngOnInit() {
    
     this.pushRightClass = 'push-right';
    
    }



    profile(){
      this.loginService.getProfile().subscribe(profile=>{
        this.user=profile as IUser;
      },
      err=>{
       console.log(err);
      });
    }

    onLogoutClick(){
        this.loginService.logout();
        this.flashMessage.show('You are logged out',{
          cssClass:'alert-success',
          timeout:1000
        })
        this.router.navigate(['/login']);
        return false;
      }

      isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }


}
