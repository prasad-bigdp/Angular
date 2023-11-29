import { Component, Input, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuoteComponent implements OnInit {
  imageUrl: string = './../assets/images/got_logo.jpg';
  @Input() quotes: any[] = [];
  quotesFromApi: any[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quoteService.getQuotes().subscribe((data) => {
      this.quotes = data;
    });
  }
}
