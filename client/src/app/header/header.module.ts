import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NgbDropdownModule,
    NgbModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
