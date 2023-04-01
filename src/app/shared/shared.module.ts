import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksGalleryComponent } from './components/books-gallery/books-gallery.component';
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { BookFormComponent } from './components/book-form/book-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BookCardComponent,
    BooksGalleryComponent,
    NewsletterFormComponent,
    AddToCartButtonComponent,
    ModalComponent,
    BookFormComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    HeaderComponent, FooterComponent, BooksGalleryComponent, ModalComponent, BookFormComponent
  ]
})
export class SharedModule { }
