import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/http/books/books.service';
import { IBook } from 'src/app/shared/interfaces/i-book';
import { DiscountService } from 'src/app/shared/services/http/discounts/discount.service';
import { IDiscount } from 'src/app/shared/interfaces/i-discount';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private booksService: BooksService, private discountService: DiscountService) { }

  books: IBook[] = [];
  display = "none";
  block = 'none';
  editBookId: number = 0;

  getAllBooks() {
    this.booksService.getAll()
      .subscribe({
          next: books => {
            //console.log(books);
            this.books = books

          },
          error: err => {
            console.log(err)
          } 
      })
  }

  deleteBook(id : number) {
    this.booksService.delete(id)
      .subscribe({
        next: response => {
          this.books = this.books.filter((book: any) => {
            return book.id != id
          })
          console.log(this.books)
        },
        error: err => {
         // console.log(err)
        }
      })
  }

  updateBook(id: number) {
    this.display = 'block';
    this.editBookId = id;
  }

  calculateDiscountedPrice(basePrice: number, discountPercent: number): string {
    let discountedPrice;
    if(discountPercent) {
      discountedPrice = basePrice - (basePrice / 100) * discountPercent;
      return discountedPrice.toFixed(2);
    } else {
      return basePrice.toString();
    }
  }



openModal() {
    this.display = 'block';
    this.editBookId = 0;
  }
  onCloseHandled() {
    this.display = 'none';
  }

  ngOnInit(): void {
    this.getAllBooks();

  }

}
