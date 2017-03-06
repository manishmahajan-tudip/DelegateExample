import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeDataModelHelper, HomeDataModelHelperDelegate } from './home-data-model-helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeDataModelHelper]
})
export class HomePage implements HomeDataModelHelperDelegate {

  postsDataArray: Array<string> = new Array<string>();

  constructor(public navCtrl: NavController, public homeDataModelHelper: HomeDataModelHelper) {
    this.homeDataModelHelper.homeDataDelegate = this;
    this.homeDataModelHelper.getHomeData();
  }

  homeDataUpdated(data) {
    this.postsDataArray = data;
  }
}
