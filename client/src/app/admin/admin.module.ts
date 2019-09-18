import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPipe } from '../sharedModule/pipes/search-filter';
import { SortByPipe } from '../sharedModule/pipes/sort-by';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  declarations: [AdminComponent, AdminBooksComponent, IssuedBooksComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule
  ],
  exports:[AdminComponent,AdminBooksComponent,IssuedBooksComponent]
})
export class AdminModule { }
