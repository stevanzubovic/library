import { Component, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { IBook } from '../../interfaces/i-book';
import { BooksService } from '../../services/http/books/books.service';
import { CartService } from '../../services/cart/cart.service';
import { DiscountService } from '../../services/http/discounts/discount.service';
import { IDiscount } from '../../interfaces/i-discount';

@Component({
  selector: 'app-books-gallery',
  templateUrl: './books-gallery.component.html',
  styleUrls: ['./books-gallery.component.css']
})
export class BooksGalleryComponent implements OnInit {

  constructor(private booksService: BooksService, private cartService: CartService, private discountService: DiscountService) { }

  @Input() books: IBook[] = [];

  @Input() discounts: IDiscount[] = [];
  

  ngOnInit(): void {
   this.getAllDiscounts();
  }

  calculateDiscountedPrice(basePrice: number, discountPercent: number): string {
    let discountedPrice;
    if(discountPercent) {
      discountedPrice = basePrice - (basePrice / 100) * discountPercent;
      return discountedPrice.toFixed(2);
    } else {
      return basePrice.toFixed(2);
    }
  }

  getDiscoutPercentById(id: number): number {
    let discount = this.discounts.filter((x: any) => x.id == id);
    if(discount.length == 1) {
      return discount[0].percent;
    } else {
      return 0
    }
  }

  addBookToCart(id: number) {
    console.log(id)
    this.cartService.addBookToCart(id);

  }

  getAllDiscounts() {
    this.discountService.getAllDiscounts()
      .subscribe({
        next: discounts => {
          this.discounts = discounts;
        }
      })
  }

  // getAllBooks() {
  //   this.booksService.getBooks()
  //     .subscribe({
  //         next: books => {
  //           console.log(books);
  //           this.books = books
  //         },
  //         error: err => {
  //           console.log(err)
  //         } 
  //     })
  // }

}
