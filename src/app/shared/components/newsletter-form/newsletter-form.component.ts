import { Component, OnInit } from '@angular/core';
import { INLSubscription } from '../../interfaces/i-n-lsubscription';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NewsLetterSubscriptionService } from '../../services/http/newsLetterSubscription/news-letter-subscription.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.css']
})
export class NewsletterFormComponent implements OnInit {

  constructor(private subscriptionService: NewsLetterSubscriptionService) { }

  nLemail: INLSubscription = {'email':''};
  message: string = '';

  isFieldValidPristineUntouched(field: NgModel): boolean {
    if(field.invalid && (field.pristine || field.untouched)) {
      return true
    } else if(field.invalid == null || field.pristine == null || field.untouched == null){
      return false
    } else {
      return false
    }

  }

  addEmailToNewsLetterList(email: NgForm): void {
    this.subscriptionService.subscribeToNl(email.value.nlEmail).subscribe({

    });
    console.log(email.value.nlEmail);
  }

  onEmailSubmit() {
    this.message = 'Thank you for subscribing!';

    setTimeout(() => {
      this.message = '';
    }, 5000)
    
    console.log('hello');
  }

  ngOnInit(): void {

  }

}
