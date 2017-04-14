import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places';

@Component({
    selector: 'page-locate',
    templateUrl: 'locate.html'
})
export class LocatePage {

    constructor(
        public navCtrl: NavController
    ) {

    }

    placesPage() {
        this.navCtrl.push(PlacesPage);
    }
}
