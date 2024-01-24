import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactDetail = {
    name: 'Michael Miller',
    title: 'Web Designer & Developer',
    email: 'abc@info.com',
    tel: '+123-456-7890',
    address: '123 Street, Los Angeles, CA, USA',
  };
  contact = { name: '', email: '', message: '', subject: '' };

  send() {
    console.log(this.contact);
  }
}
