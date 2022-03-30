import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuotesComponent} from './quotes/quotes.component';
import {FunFactsComponent} from './fun-facts/fun-facts.component';
import {QuoteFormComponent} from './quote-form/quote-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quotes', component: QuotesComponent,
    children: [
      {path: 'new', component: QuoteFormComponent},
      {path: ':id/edit', component: QuoteFormComponent}]
  },
  {path: 'fun-facts', component: FunFactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
