import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote-element',
  templateUrl: './quote-element.component.html',
  styleUrls: ['./quote-element.component.css']
})
export class QuoteElementComponent implements OnInit {
  @Input() text = 'Carpe diem';
  @Input() author = 'Horace';

  constructor() { }

  ngOnInit(): void {
  }
}
