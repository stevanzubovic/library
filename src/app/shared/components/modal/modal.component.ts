import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { BooksService } from '../../services/http/books/books.service';
import { CoversService } from '../../services/http/cover/covers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private bookService: BooksService, private coverService: CoversService) { }
  @Input() display = 'block';
  covers : any[] = [];

  // bookForm = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   author: new FormControl('',[Validators.required]),
  //   description: new FormControl('', [Validators.required]),
  //   cover: new FormControl(''),
  //   available: new FormControl('checked')
  // });


  // get title() {return this.bookForm.get('title')}
  // get author() {return this.bookForm.get('author')}
  // get description() {return this.bookForm.get('description')}
  // get cover() {return this.bookForm.get('cover')}
  // get available() {return this.bookForm.get('available')}

  // submitbook() {
  //   let data : any = {
  //     title: this.bookForm.get('title')?.value,
  //     author: this.bookForm.get('author')?.value,
  //     cover: this.bookForm.get('cover')?.value,
  //     description: this.bookForm.get('description')?.value,
  //     available: this.bookForm.get('available')?.value 
  //   }
    
  //   this.bookService.create(data).subscribe({
  //     next: response => {
  //       console.log(response)
  //     }
  //   });
  // }

  // getAllCovers() {
  //   this.coverService.getAll()
  //     .subscribe({
  //       next: covers => {
  //         this.covers = covers
  //       }
  //     })  
  // }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }

  ngOnInit(): void {
    // this.getAllCovers();
  }
}
