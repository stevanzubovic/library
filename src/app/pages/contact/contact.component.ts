import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  submitContact() {
    console.log(this.contactForm.value)
  }

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  get firstName() {return this.contactForm.get('firstName')}
  get lastName() {return this.contactForm.get('lastName')}
  get email() {return this.contactForm.get('email')}
  get message() {return this.contactForm.get('message')}

  ngOnInit(): void {

  }

}
