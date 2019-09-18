import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IIssue } from '../../model/issue';
import { IFavourite } from '../../model/favourite';
import { IBook } from '../../model/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookCount:number=0;
  books:IBook[]=[];
  
 readonly baseURL='http://localhost:3000/books';
 readonly issueURL='http://localhost:3000/books/issue';

  constructor(private http: HttpClient) { 
    this.getBookCount();
  }


  getBooksList(){
    return this.http.get(this.baseURL);
  }

  getBook(_id:string){
    return this.http.get(this.baseURL+`/${_id}`);
  }

  issueBook(issue:IIssue){
    return this.http.post(this.issueURL,issue).pipe(map((res:any)=> res));
  }

  favouriteBook(favourite:IFavourite){
    return this.http.post(this.baseURL+`/favourite`,favourite).pipe(map((res:any)=> res));
  }

  getMyBooksList(_id:string){
     return this.http.get(this.baseURL+'/mybooks'+`/${_id}`);
  
  }

  getMyFavouriteBooksList(_id:string){
    return this.http.get(this.baseURL+'/favourite'+`/${_id}`);
  }

  returnMyBook(issue:IIssue){
    return this.http.post(this.baseURL+'/return',issue);
  }

  getBookCount(){
    this.bookCount=this.books.length;
  }
}
