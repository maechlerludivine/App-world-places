import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { AddContactPage } from '../add-contact/add-contact';
import { ProfilePage } from '../profile/profile';
import { PlacesPage } from '../places/places';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = ProfilePage;
  tab2Root: any = PlacesPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;

  }
}
