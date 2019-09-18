import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {IBook} from '../model/books';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { IIssue } from '../model/issue';
import { BookService } from '../sharedModule/service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  animations: [routerTransition()]
})
export class BooksComponent implements OnInit {
  pageTitle = 'Book List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
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

  filteredBooks: IBook[] = [];
  books: IBook[] =[];

  constructor(private bookService:BookService,
    private router: Router,
    private flashMessage:FlashMessagesService) { }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
      book.topic.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleOption(book:IBook): void {
   
  }

  ngOnInit(): void {
   this.getBooks();
  }

  getBooks(){
    this.bookService.getBooksList().subscribe((res)=>{
      this.books=res as IBook[];
      this.filteredBooks=this.books;
    });
  }

  

  reserveBook(book:IBook){
    let userId=JSON.parse(localStorage.getItem('user'));
    let issue:IIssue={
      user_id:userId.id,
      firstName:userId.firstName,
      email:userId.email,
      book_id:book._id,
      bookTitle:book.bookTitle
    }
    console.log(issue);
    this.bookService.issueBook(issue).subscribe(data => {
      var flashMessage=this.flashMessage;
      if(data.success){
        flashMessage.show('Book issued successfully', {cssClass: 'alert-success', timeout: 1000});
        book.issued=true;
      } else {
        flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 1000});
      }
    });
  }
}
