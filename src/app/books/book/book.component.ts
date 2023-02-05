import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { book } from 'src/types/Book';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: book  = {} as book

  isIncart: boolean = false

  constructor(private cartService: CartService ) {}


  addToCart() {
    this.isIncart = true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isIncart = false;
    this.cartService.remove(this.book);

  }
}
