import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addBookToCart(id: number) {
    if(localStorage.getItem('cart')) { 
      let cart = JSON.parse(localStorage.getItem('cart')!);

      let isItemInCart = this.doesItemWIthIdExistInCart(id, cart);
      if(isItemInCart) {
        this.incrementItemQuantity(id);
      } else { 
        this.addItemToCart(id, cart);
        }   
    } else {
        this.addItemToEmptyCart(id);
      }
  }

  getCart() {
    let cart = localStorage.getItem('cart');
    if(cart != '') {
      return JSON.parse(localStorage.getItem('cart')!);
    } else {
      return 0
    }
  }

  destroyCart() {
    localStorage.removeItem('cart');
  }

  getItemsWithIds(ids: number[], cart: any) {

  }

  removeBookFromCart(id: number) {
    //removes item even if there is more than 1 in the cart
    let cart = JSON.parse(localStorage.getItem('cart')!);
    let isItemInCart = this.doesItemWIthIdExistInCart(id, cart)
    console.log(cart)
    let filteredCart;
    if(isItemInCart) {
      filteredCart = cart.filter((item: any) => {
        return item.id != id
      })
    }
    console.log(filteredCart)
    localStorage.setItem('cart', JSON.stringify(filteredCart))
    //return filteredCart;
  }

  private getItem(id: number, cart: any) {
    let item = cart.filter(function (item: any) {
      return item.id == id
    });
    return item[0];
  }

  private addItemToEmptyCart(id: number) {
    let item = JSON.stringify([{id: id, quantity: 1}]);
    localStorage.setItem('cart', item);
  }

  private doesItemWIthIdExistInCart(id: number, cart: any): boolean {
    let filteredCart = cart.filter(function (item: any) {
      return item.id == id
    });
    if(filteredCart.length == 1) {return true} else {return false}
  }

  incrementItemQuantity(id: number) {
    let cart = this.getCart();
    cart.forEach((element: any ) => {
      if(element.id == id) {
        element.quantity++ 
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  decrementItemQuantity(id: number) {
    let cart = this.getCart();
    cart.forEach((element: any ) => {
      if(element.id == id) {
        element.quantity-- 
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private addItemToCart(id: number, cart: any) {
    let item = {id: id, quantity: 1};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
}
