import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INavItem } from '../../../interfaces/i-nav-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }

  private navItemsUrl = 'assets/data/menuItems.json';

  getNavigationItems(): Observable<INavItem[]> {
    return this.http.get<INavItem[]>(this.navItemsUrl);
  }
}
