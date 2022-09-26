import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces/i-book';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { BooksService } from 'src/app/shared/services/http/books/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private bookService: BooksService) { }

  cart: any = [];
  books: any = [];
  infoText = 'No items currently in cart';

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    let booksIds: number[] = [];
    if(this.cart) {
      this.cart.forEach((item: any) => {
        booksIds.push(item.id);
      });
    } else {
    }
    this.bookService.getBooks().subscribe({
      next: allBooks => {
        this.books = allBooks.filter((x: any) => {
          return booksIds.includes(x.id)
        });
        this.books.forEach((y: any) => {
          this.cart.forEach((z: any) => {
            if(y.id === z.id) {
              y.quantity = z.quantity
            }
          })
        })
      }
    });
  }

  clearCart() {
    this.cartService.destroyCart();
    this.books = [];
  }

  checkout() {
    this.cartService.destroyCart();
    this.books = [];
    this.infoText = "Thank you for shopping with us";
  }

  calculateDiscountedPrice(basePrice: number, discountPercent: number, quantity: number): string {
    let discountedPrice;
    if(discountPercent) {
      discountedPrice = (basePrice - (basePrice / 100) * discountPercent) * quantity;
      return discountedPrice.toFixed(2);
    } else {
      return (basePrice * quantity).toFixed(2);
    }
  }

  removeItemFromCart(id: number) {
    this.cartService.removeBookFromCart(id);
    this.books = this.books.filter((book: any) => {
      return book.id != id
    })
  }

  incrementQuantity(id: number) {
    this.cartService.incrementItemQuantity(id);
    for(let i = 0; i < this.books.length; i++) {
      if(this.books[i].id == id) {
        console.log(this.books[i].quantity)
        this.books[i].quantity++;
        break
      }
    }
  }

  decrementQuantity(id: number) {
    this.cartService.decrementItemQuantity(id);
    for(let i = 0; i < this.books.length; i++) {
      if(this.books[i].id == id) {
        this.books[i].quantity--;
        if(this.books[i].quantity == 0) {
          this.cartService.removeBookFromCart(id);
          this.books = this.books.filter((book: any) => {
            return book.id != id
          })
        }
        break
      }
    }
  }
}
