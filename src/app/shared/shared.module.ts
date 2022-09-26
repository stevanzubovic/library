import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksGalleryComponent } from './components/books-gallery/books-gallery.component';
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component';
import { FormsModule } from '@angular/forms';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BookCardComponent,
    BooksGalleryComponent,
    NewsletterFormComponent,
    AddToCartButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  exports: [
    HeaderComponent, FooterComponent, BooksGalleryComponent
  ]
})
export class SharedModule { }
