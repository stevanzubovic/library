import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/shared/interfaces/i-book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  private booksUrl = 'assets/data/books.json';

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.booksUrl);
  }

  books: IBook[] = []; 

  getBooksByIds(ids: number[]): IBook[] {

      this.getBooks().subscribe({
        next: allBooks => {
            this.books = allBooks
          },
          error: err => {
            console.log(err);
          }
      });
      this.books = this.books.filter((item: any) => {
        ids.includes(item.id);
      })

      //console.log(books)
      return this.books
  }
}

// llBooks.filter((x: IBook) => {
//   ids.includes(x.id); 
//   console.log(ids.includes(x.id))