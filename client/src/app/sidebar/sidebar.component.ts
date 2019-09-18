import {FlashMessagesService} from 'angular2-flash-messages';
import { IBook } from '../model/books';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../sharedModule/service/login.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();
  
    constructor(
        private router: Router,
    private loginService:LoginService,
    private flashMessage:FlashMessagesService,
    
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
      this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
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

      eventCalled() {
        this.isActive = !this.isActive;
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
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
