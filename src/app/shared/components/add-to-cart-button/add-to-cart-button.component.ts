import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() bookId = 0;
  submittedState = false;
  displayText = 'Add to cart';

  addBookToCart(id: number) {
    this.cartService.addBookToCart(id);
    this.setSubmittedState();
  }

  setSubmittedState() {
    const period = 1500;
    this.submittedState = true;
    this.displayText = 'Added to cart';
    setTimeout(() => {     
        this.submittedState = false;
        this.displayText = 'Add to cart';
    }, period)
  }

  ngOnInit(): void {

  }

}
