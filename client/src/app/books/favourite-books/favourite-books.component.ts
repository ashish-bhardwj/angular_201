import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { IBook } from '../../model/books';
import { BookService } from '../../sharedModule/service/book.service';

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.css']
})
export class FavouriteBooksComponent implements OnInit {
  pageTitle:string='Favourite Books';
  errorMessage = '';
  sortByKey: string='_id';
  
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  filteredBooks: IBook[]=[];
  books: IBook[] =[];

  constructor(private bookService:BookService,
    private flashMessage:FlashMessagesService,
    private router: Router) {

  }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((favourite: IBook) =>
    favourite.topic.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }   

         
  ngOnInit() {
    this.getFavouriteBooks();
  }

  getFavouriteBooks(){
    let userId=JSON.parse(localStorage.getItem('user'));
    this.bookService.getMyFavouriteBooksList(userId.id).subscribe((res)=>{
      console.log(res);
      this.books=res as IBook[];
      this.filteredBooks=this.books;
    });
  }

  goBack(): void {
    this.router.navigate(['/myBooks']);
  }

 

  
}
