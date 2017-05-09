import { Component,ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  goToSlide() {
      this.slides.slideTo(2,500);
  }

  goToHome() {
      this.navCtrl.setRoot(HomePage);
  }

}

