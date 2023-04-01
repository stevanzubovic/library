import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { BooksService } from '../../services/http/books/books.service';
import { CoversService } from '../../services/http/cover/covers.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(private bookService: BooksService, private coverService: CoversService) { }

  ngOnInit(): void {
    this.getAllCovers();
  }

  covers : any[] = [];

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    cover: new FormControl('', [Validators.required, Validators.min(0)]),
    available: new FormControl('checked')
  });


  get title() {return this.bookForm.get('title')}
  get author() {return this.bookForm.get('author')}
  get description() {return this.bookForm.get('description')}
  get cover() {return this.bookForm.get('cover')}
  get available() {return this.bookForm.get('available')}
  get price() {return this.bookForm.get('price')}

  getAllCovers() {
    this.coverService.getAll()
      .subscribe({
        next: covers => {
          this.covers = covers
        }
      })  
  }

  submitbook() {
    let data : any = {
      title: this.bookForm.get('title')?.value,
      author: this.bookForm.get('author')?.value,
      cover: this.bookForm.get('cover')?.value,
      amount: this.bookForm.get('price')?.value,
      description: this.bookForm.get('description')?.value,
      available: this.bookForm.get('available')?.value 
    }
    
    this.bookService.create(data).subscribe({
      next: response => {
        
      }
    });
  }
}
