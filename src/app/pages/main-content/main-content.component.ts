import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/http/books/books.service';
import { IBook } from 'src/app/shared/interfaces/i-book';
import { DiscountService } from 'src/app/shared/services/http/discounts/discount.service';
import { IDiscount } from 'src/app/shared/interfaces/i-discount';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private booksService: BooksService, private discountService: DiscountService) { }

  books: IBook[] = [];
  discounts: IDiscount[] = [];

  priceSortType = 'default';
  alphabetSortType = 'default';

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

  resetSortFields() {
    console.log(this.alphabetSortType)
  }

  getAllDiscounts() {
    this.discountService.getAllDiscounts()
      .subscribe({
        next: discounts => {
          this.discounts = discounts;
        }
      })
  }

  getFilteredlBooks() {
    this.booksService.getAll()
      .subscribe({
          next: books => {
            this.books = this.sortByPrice(this.priceSortType, books);
            //this.books = this.sortAlphabetically(this.alphabetSortType, books);
           // console.log(this.sortByPrice(this.sortType, books))
           this.alphabetSortType = 'default'
          },
          error: err => {
            console.log(err)
          } 
      })
    }

    getAlphabeticallySortedBooks() {
      this.booksService.getAll()
      .subscribe({
          next: books => {
           // this.books = this.sortByPrice(this.priceSortType, books);
            this.books = this.sortAlphabetically(this.alphabetSortType, books);
           // console.log(this.sortByPrice(this.sortType, books))
           this.priceSortType = 'default'
          },
          error: err => {
            console.log(err)
          } 
      })
    }

  sortByPrice(sortType: string, books: IBook[]): IBook[] {
    //this.getAllBooks();
    if(sortType === 'default') {
        return this.books
    } else if(sortType === 'asc') {
        return books.sort((a,b) => this.calculateDiscountedPrice(a.basePrice, this.getDiscoutPercentById(a.discountId)) - this.calculateDiscountedPrice(b.basePrice, this.getDiscoutPercentById(b.discountId)))
    } else if(sortType === 'desc'){
        return books.sort((a,b) => this.calculateDiscountedPrice(b.basePrice, this.getDiscoutPercentById(b.discountId)) - this.calculateDiscountedPrice(a.basePrice, this.getDiscoutPercentById(a.discountId)))
    } else {
        return books
    }
  }

  sortAlphabetically(sortType: string, books: IBook[]): IBook[] {
    if(sortType === 'default') {
      return this.books
    } else if(sortType === 'az') {
      return books.sort((a,b) => {
        return a.title.localeCompare(b.title);
      })
    } else if(sortType === 'za'){
      return books.sort((a,b) => {
        return b.title.localeCompare(a.title);
      })
    } else {
        return books
    }
  }  

  private calculateDiscountedPrice(basePrice: number, discountPercent: number): number {
    let discountedPrice;
    if(discountPercent) {
      discountedPrice = basePrice - (basePrice / 100) * discountPercent;
      return discountedPrice;
    } else {
      return basePrice
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

  ngOnInit(): void {
    this.getAllDiscounts();
    this.getAllBooks();
  }
  
}
