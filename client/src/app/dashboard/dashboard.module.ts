import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgbDropdownModule, NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbDropdownModule,
    NgbCarouselModule,
    NgbAlertModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
