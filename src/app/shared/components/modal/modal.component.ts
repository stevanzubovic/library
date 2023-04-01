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
