import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/i-book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  constructor() { }

  @Input() book!: IBook;
  @Input() index: number = 1;

  ngOnInit(): void {
   //console.log(this.book);
  }
  

}
