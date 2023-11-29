import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl = 'https://api.gameofthronesquotes.xyz/v1/random/6';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
