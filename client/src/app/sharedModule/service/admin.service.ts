import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IBook } from '../../model/books';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectedBook:IBook|{}={};
  bookData:any;
  private bookUrl = 'assets/books.json';
  readonly baseURL='http://localhost:3000/books';
  readonly issueBooksURL='http://localhost:3000/books/issuedBooks';
  readonly springBaseUrl='http://localhost:8080/books';
 
  constructor(private http: HttpClient) { }

  getBooksList(){
    return this.http.get(this.baseURL);
  }

  postBooks(book:IBook){
    console.log(book);
    return this.http.post(this.baseURL,book);
  }

  putBooks(book:IBook){
    console.log(book);
    return this.http.put(this.baseURL+`/${book._id}`,book);
  }

  deleteBook(_id:string){
    return this.http.delete(this.baseURL+`/${_id}`);
  }

  admin(username:string,password:string){
    if(username=='admin' && password=='admin')
    return true;
    else 
    return false;
  }

  getIssuedList(){
    console.log('issued books')
    return this.http.get(this.issueBooksURL);
  }

  fetchGoogleBook(bookname){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+bookname);
  } 
  
}
