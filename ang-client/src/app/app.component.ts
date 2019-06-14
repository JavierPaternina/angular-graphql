import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Book } from './types';
import { BooksQuery, BooksResponse} from './queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-graphql';
  books: Book[] = [];
  constructor(private apollo: Apollo) {

  }

  ngOnInit() {
      this.apollo.watchQuery({
        query: BooksQuery
      }).valueChanges.subscribe((response) => {
        const { data : { books }} = response;
        this.books = books;
      });
  }
}
