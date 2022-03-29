import { Component } from '@angular/core';
import {Quote} from './quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-quotes-app';
  quotes: Quote[] = [new Quote('q1', 'Carpe diem.', 'Herocu'),
    new Quote('q2', 'Be yourself; everyone else is already taken.', 'Oscar Wilde')];

  addQuote(quote: Quote) {
    this.quotes.push(quote);
  }

}
