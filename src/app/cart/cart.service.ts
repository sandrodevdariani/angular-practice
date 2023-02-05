import { Injectable } from '@angular/core';
import { book } from 'src/types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array <book>  = [];

  constructor() { }

  add(book: book) {
    this.cart.push(book);
  }

  get(){
    return this.cart;
  }

  remove(book: book) {
    this.cart = this.cart.filter(b => b != book  );
  }
}
