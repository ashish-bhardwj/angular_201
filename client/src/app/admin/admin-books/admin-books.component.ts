import { Component, OnInit } from '@angular/core';
import { IBook } from '../../model/books';
import { NgForm } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AdminService } from '../../sharedModule/service/admin.service';

@Component({
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {
  pageTitle = 'Book List for Admin';
  errorMessage = '';
  sortByKey: string='_id';
  APIbooks:any[];
  isBookPresent:boolean;
  googleBook:any={};

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

  constructor(private adminService:AdminService,
    private flashMessage:FlashMessagesService) { }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
      book.topic.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleOption(book:IBook): void {
   if(book.issued)
   book.issued=false;
   else
   book.issued=true;
  }
  ngOnInit(): void {
    this.getBooks();
    this.resetForm();
   }
 
   getBooks(){
     this.adminService.getBooksList().subscribe((res)=>{
       this.books=res as IBook[];
       this.filteredBooks=this.books;
     });
   }

   onEdit(book:IBook){
     this.adminService.selectedBook=book;
   }

   resetForm(form?:NgForm){
     if(form)
     form.reset();
     this.adminService.selectedBook={
       _id:"",
       bookTitle:"",
       topic:"",
       author:"",
       cost:null,
       description:"",
       rating:null,
       count:null,
       issued:null
     }

   }

   search(bookname:String){
    var flashMessage=this.flashMessage;
    if(bookname==="")
      return 
    this.adminService.fetchGoogleBook(bookname)
    .subscribe(
      (data:any) => {
        this.APIbooks = data.items;
        this.isBookPresent= true },
      error => { 
        this.flashMessage.show('Unable to find books...Enter details manually', {
          cssClass: 'alert-danger',
          timeout: 1000});
        console.log("hello Errorr ", error)
       
      }
    );
    
  }

  show(index:number){
    console.log("i:"+index);
    this.adminService.bookData=this.APIbooks[index];
    if(this.adminService.bookData.saleInfo.listPrice===undefined)
    {
     alert("Book not available..try adding manually");
    }
    else{this.adminService.selectedBook={
      _id:"",
      bookTitle:this.adminService.bookData.volumeInfo.title,
      topic:this.adminService.bookData.volumeInfo.categories,
      author:this.adminService.bookData.volumeInfo.authors,
      cost:this.adminService.bookData.saleInfo.listPrice.amount,
      description:this.adminService.bookData.volumeInfo.description,
      rating:this.adminService.bookData.volumeInfo.averageRating,
      count:5,
      issued:false
    }}
    
  }



   onSubmit(form:NgForm){
     if(form.value._id === undefined || form.value._id == ""){
      this.adminService.postBooks(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getBooks();
      });
     }
     else{
      this.adminService.putBooks(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getBooks();
      });
     }    
   }

   onDelete(_id:string,form:NgForm){
     if(confirm('Are you sure to delete this record ?')==true){ 
       this.adminService.deleteBook(_id).subscribe((res)=>{
         this.getBooks();
         this.resetForm(form);
       })
     }
   }
 

}
