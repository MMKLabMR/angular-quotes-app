import {Quote} from './quote.model';

export class QuotesService {
  quotes: Quote[] = [new Quote('q1', 'Carpe diem.', 'Herocu'),
    new Quote('q2', 'Be yourself; everyone else is already taken.', 'Oscar Wilde')];

  addQuote(quote: Quote) {
    this.quotes.push(quote);
  }
}
