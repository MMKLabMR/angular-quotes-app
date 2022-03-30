import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote.model';
import {QuotesService} from '../quotes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];

  constructor(private quotesService: QuotesService, private router: Router) {
    this.quotes = this.quotesService.quotes;
  }

  ngOnInit(): void {
  }

  onAddQuote() {
    this.router.navigateByUrl('/quotes/new');
  }

  onEditQuote(quote: Quote) {
    this.router.navigate(['quotes', quote.id, 'edit'],
      {queryParams: {text: quote.text, author: quote.author}});
  }

}
