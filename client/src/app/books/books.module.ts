import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  declarations: [BooksComponent, BookDetailComponent, FavouriteBooksComponent, MyBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule
  ],
  exports:[BooksComponent,BookDetailComponent,FavouriteBooksComponent,MyBooksComponent]
})
export class BooksModule { }
