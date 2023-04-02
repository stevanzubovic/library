import { style } from '@angular/animations';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { BooksService } from '../../services/http/books/books.service';
import { CoversService } from '../../services/http/cover/covers.service';
import { DiscountService } from '../../services/http/discounts/discount.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(private bookService: BooksService, private coverService: CoversService, private discountService: DiscountService) { }

  ngOnInit(): void {
    this.getAllCovers();
    this.getAllDiscounts();
  }

  covers : any[] = [];
  discounts : any[] = [];
  @Input() bookId :number = 0;

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    discount: new FormControl('', [Validators.required]),
    cover: new FormControl('', [Validators.required, Validators.min(0)]),
    available: new FormControl('checked')
  });


  get title() {return this.bookForm.get('title')}
  get author() {return this.bookForm.get('author')}
  get description() {return this.bookForm.get('description')}
  get cover() {return this.bookForm.get('cover')}
  get available() {return this.bookForm.get('available')}
  get price() {return this.bookForm.get('price')}
  get discount() {return this.bookForm.get('discount')}

  getAllCovers() {
    this.coverService.getAll()
      .subscribe({
        next: covers => {
          this.covers = covers
        }
      })
  }

  getAllDiscounts() {
    this.discountService.getAll()
    .subscribe({
      next: discounts => {
        this.discounts = discounts
      }
    })  
  }

    getBook(id: number) {
      if(this.bookId) {
        this.bookService.get(id)
        .subscribe({
          next: book => {
           this.fillForm(book);
          }
        })
      } else {
        this.emptyForm()
      }
  }

  fillForm(book: any) {

    this.bookForm.get('title')?.setValue(book.title);
    this.bookForm.get('author')?.setValue(book.author);
    this.bookForm.get('description')?.setValue(book.description);
    this.bookForm.get('cover')?.setValue(book.image_id);
    this.bookForm.get('discount')?.setValue(book.discount_id);
    this.bookForm.get('price')?.setValue(book.basePrice);
  }

  emptyForm() {
    this.bookForm.get('title')?.setValue('');
    this.bookForm.get('author')?.setValue('');
    this.bookForm.get('description')?.setValue('');
    this.bookForm.get('cover')?.setValue('');
    this.bookForm.get('discount')?.setValue('');
    this.bookForm.get('price')?.setValue('');
  }

  ngOnChanges(changes: SimpleChanges) {
    // Extract changes to the input property by its name 
    console.log(changes['bookId'].currentValue);
    let id = changes['bookId'].currentValue
    this.getBook(id);

}


  submitbook() {
    
    let data : any = {
      title: this.bookForm.get('title')?.value,
      author: this.bookForm.get('author')?.value,
      cover: this.bookForm.get('cover')?.value,
      amount: this.bookForm.get('price')?.value,
      description: this.bookForm.get('description')?.value,
      available: this.bookForm.get('available')?.value, 
      discount_id: this.bookForm.get('discount')?.value
    }
    
    if(this.bookId == 0) {
      this.bookService.create(data).subscribe({
        next: response => {
          location.reload()
        }
      });
    } else {
      this.bookService.update(this.bookId, data) 
      .subscribe({
        next: response => {
          location.reload()
        }
      })
    }


    
  }
}
