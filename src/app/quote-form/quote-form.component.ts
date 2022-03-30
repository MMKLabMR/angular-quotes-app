import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quote} from '../quote.model';
import {QuotesService} from '../quotes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

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

  constructor(private quotesService: QuotesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.text = this.route.snapshot.queryParams.text;
    this.author = this.route.snapshot.queryParams.author;

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.text = queryParams.text;
      this.author = queryParams.author;
    });
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

    if(this.router.url.includes('edit')) {

this.quotesService.editQuote(new Quote(this.route.snapshot.params.id, this.text, this.author));
    } else {
      this.quotesService.addQuote(new Quote('q3', this.text, this.author));
    }

  }

  getTitle() {
    // return this.router.url.includes('edit') ? 'Edit quote' : 'Add quote';

    if (this.router.url.includes('edit')) {
      return 'Edit quote';
    } else {
      return 'Add quote';
    }
  }

}
