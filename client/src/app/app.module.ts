import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BooksModule } from './books/books.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgbDropdownModule, NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './sharedModule/guard/auth.guard';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { AdminModule } from './admin/admin.module';
import { PipeModule } from './pipe/pipe.module';
import { SignupModule } from './signup/signup.module';
import {TranslateService, TranslateModule} from 'ng2-translate/ng2-translate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AdminModule,
    BooksModule,
    LoginModule,
    BooksModule,
    HeaderModule,
    SidebarModule,
    SignupModule,
    NgbDropdownModule,
    NgbCarouselModule,
    NgbAlertModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2Charts
    , NgbModule,
    PipeModule,
    TranslateModule.forRoot()
  ],
  exports:[],
  providers: [AuthGuard,TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
