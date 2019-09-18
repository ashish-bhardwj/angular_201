import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../../model/books';

@Pipe({
    name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
    transform(books: IBook[], args: any): IBook[] {
        // checks array is defined or not
        if (books != undefined) {
            //sort the array based on sortPredicate
            books.sort(function (a, b) {
                if (a[args] < b[args])
                    return -1;
                if (a[args] > b[args])
                    return 1;
                return 0;
            });
        }
        return books;
    }
}