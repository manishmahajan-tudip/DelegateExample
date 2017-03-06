import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeDataModelHelper, HomeDataModelHelperDelegate } from './home-data-model-helper';
import { ProfilePage } from '../../pages/profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeDataModelHelper]
})
export class HomePage implements HomeDataModelHelperDelegate {

  static postsDataArray: Array<string> = new Array<string>();

  constructor(public navCtrl: NavController, public homeDataModelHelper: HomeDataModelHelper) {
    this.homeDataModelHelper.homeDataDelegate = this;
    this.homeDataModelHelper.getHomeData();
  }

  homeDataUpdated(data) {
    HomePage.postsDataArray = data;
  }

  goToNextPage() {
    this.navCtrl.setRoot(ProfilePage)
  }

  get staticPostDataArray() {
    return HomePage.postsDataArray;
  }
}
