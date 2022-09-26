import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INLSubscription } from 'src/app/shared/interfaces/i-n-lsubscription';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsLetterSubscriptionService {

  constructor(private http: HttpClient) { }

  private subscriptionsUrl: string = 'assets/data/subscribedEmails.json';

  subscribeToNl(email: INLSubscription): Observable<INLSubscription> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    }
    return this.http.post<INLSubscription>(this.subscriptionsUrl, email, httpOptions);
  }
}
