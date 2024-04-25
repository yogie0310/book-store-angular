import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  bookId :number = 1;
  authorId :number = 5;
}
