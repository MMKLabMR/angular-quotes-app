import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quote} from '../quote.model';
import {QuotesService} from '../quotes.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  text = 'quote';
  author = 'author';
  fullQuote = 'full quote';
  @Output() addedQuote = new EventEmitter<Quote>();

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit(): void {
  }

  onChangeOfAuthor(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.author = (event.target as HTMLInputElement).value;
  }

  onAddQuote(): void {
    console.log('Quote added');
    this.fullQuote = `${this.text} - '${this.author}'`;
    // this.addedQuote.emit(new Quote('q3', this.text, this.author));
    this.quotesService.addQuote(new Quote('q3', this.text, this.author));
  }

}
