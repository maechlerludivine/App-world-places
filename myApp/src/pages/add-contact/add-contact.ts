import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactPage { 
  public contactsfound: any;

  constructor(
    public navCtrl: NavController,
    private contacts: Contacts
  ) {
    
    this.contactsfound = [];
    this.getContact();
  }
  
  getContact() {
      this.contacts.find(["*"], {multiple:true}).then((contacts) => {
        this.contactsfound = contacts;
      });

  }
}