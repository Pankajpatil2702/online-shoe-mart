import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert("Thank you " + this.contactData.name + "! We will contact you soon.");
    this.contactData = { name: '', email: '', message: '' };
  }
  
}
