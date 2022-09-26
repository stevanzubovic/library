import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { AuthorComponent } from './pages/author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ContactComponent,
    CartComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
