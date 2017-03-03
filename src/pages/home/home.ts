import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeDataModelHelper, HomeDataModelHelperDelegate } from './home-data-model-helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeDataModelHelper]
})
export class HomePage implements HomeDataModelHelperDelegate {

  empNameArray: Array<string> = new Array<string>();

  constructor(public navCtrl: NavController, public homeDataModel: HomeDataModelHelper) {
    this.homeDataModel.homeDataDelegate = this;
    this.homeDataModel.getHomeData();
  }

  homeDataUpdated(data) {
    this.empNameArray = data;
    console.log("emp name array", this.empNameArray);
  }
}
