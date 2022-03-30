import {Quote} from './quote.model';

export class QuotesService {
  quotes: Quote[] = [new Quote('q1', 'Carpe diem.', 'Herocu'),
    new Quote('q2', 'Be yourself; everyone else is already taken.', 'Oscar Wilde')];

  addQuote(quote: Quote) {
    this.quotes.push(quote);
  }

  editQuote(quote: Quote) {
    const quoteForUpdate = this.quotes.find((q) => {
      return q.id === quote.id;
    });

    if (quoteForUpdate) {
      quoteForUpdate.text = quote.text;
      quoteForUpdate.author = quote.author;
    }
  }
}
