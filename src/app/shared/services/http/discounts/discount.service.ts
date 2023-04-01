import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDiscount } from 'src/app/shared/interfaces/i-discount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) { }

  private url = 'assets/data/discounts.json';
  private serverPath = 'http://localhost/server/api/discount.php';

  getAllDiscounts(): Observable<IDiscount[]> {
    return this.http.get<IDiscount[]>(this.url);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.serverPath);
  }
}
