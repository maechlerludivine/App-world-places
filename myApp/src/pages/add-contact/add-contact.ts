import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts } from 'ionic-native';


@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactPage { 
  public contactsfound: any;
  public search: any;
  public contacttobefound: any;
  
  constructor(
    public navCtrl: NavController,
    private contacts: Contacts
  ) {
    
    this.contacttobefound = '';
    this.contactsfound = [];
    this.getContact("");
  }
  
  getContact(val) {
      Contacts.find([], {filter: val,multiple:true}).then((contacts) => {
        this.contactsfound = contacts;
      });

  }
}