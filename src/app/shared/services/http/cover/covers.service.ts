import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoversService {

  constructor(private http :HttpClient) { }

  private serverPath = 'http://localhost/server/api/cover.php';

  covers: any[] = []; 

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.serverPath);
  }
}
