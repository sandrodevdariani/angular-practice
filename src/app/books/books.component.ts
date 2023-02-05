import { Component, OnInit } from '@angular/core';

import { book } from 'src/types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  constructor(private booksService: BooksService ) {}; 

  books: book[] = [];


  ngOnInit(): void{
    this.books = this.booksService.getBooks();
  }
  


   isShowing: boolean = true

    addToCart(book: book){
      console.log(book)
    }
  }
