"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (books, args) {
        if (args != undefined) {
            var resultantBooks = books.filter(function (book) { return book.bookTitle.toUpperCase().indexOf(args.toUpperCase()) !== -1; });
            return resultantBooks;
        }
        else {
            return books;
        }
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'searchpipe'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=search-filter.js.map