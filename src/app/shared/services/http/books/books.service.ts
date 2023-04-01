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
  private serverPath = 'http://localhost/server/api/book.php';

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

  get(id: number | string):Observable<IBook> {
    return this.http.get<IBook>(this.serverPath + '/' + id);
  }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.serverPath);
  }

    create(data: any): Observable<any> {
    return this.http.post<IBook>(this.serverPath, data);
  } 

  update(id: any, data: IBook): Observable<any>{
    return this.http.patch<IBook>(this.serverPath + '/' + id, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete<IBook>(this.serverPath + '/' + id);
  }
}

// llBooks.filter((x: IBook) => {
//   ids.includes(x.id); 
//   console.log(ids.includes(x.id))