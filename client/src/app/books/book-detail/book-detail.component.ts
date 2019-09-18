import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../../model/books';
import { BookService } from '../../sharedModule/service/book.service';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle = 'Book Detail';
  errorMessage = '';
  book: IBook | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getBook(id);
    }
  }

  getBook(id:string){
    this.bookService.getBook(id).subscribe((res)=>{
      this.book=res as IBook;
    });
  }



  onBack(): void {
    this.router.navigate(['/books']);
  }


}
