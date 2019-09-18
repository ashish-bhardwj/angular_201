import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../../model/books';

@Pipe({
    name: 'searchpipe'
})

export class SearchPipe implements PipeTransform {
    transform(books: IBook[], args: any): IBook[] {
        if (args != undefined) {
            let resultantBooks = books.filter(book => book.bookTitle.toUpperCase().indexOf(args.toUpperCase()) !== -1);
            return resultantBooks;

        }
        else {
            return books;
        }
    }
}

