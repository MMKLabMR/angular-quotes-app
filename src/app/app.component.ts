import { Component } from '@angular/core';
import {Quote} from './quote.model';
import {QuotesService} from './quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuotesService]
})
export class AppComponent {
  // quotes: Quote[] = [new Quote('q1', 'Carpe diem.', 'Herocu'),
  //   new Quote('q2', 'Be yourself; everyone else is already taken.', 'Oscar Wilde')];
  quotes: Quote[] = this.quotesService.quotes;
  show = true;

  constructor(private quotesService: QuotesService) {
  }

  addQuote(quote: Quote) {
    // this.quotes.push(quote);
  }

}
