import {HomeDataModel} from './home-data-model';

export interface HomeDataModelHelperDelegate {
    homeDataUpdated(string);
}

//This is helper class to store one by one object in data model
export class HomeDataModelHelper {

  homeDataArray: Array<HomeDataModel> = new Array<HomeDataModel>();
  homeDataDelegate: HomeDataModelHelperDelegate;
  homeData = {
    "data": [
        { "emp_firstname":"Manish", "emp_lastname":"Mahajan" },
        { "emp_firstname":"Manish", "emp_lastname":"Mahajan" },
        { "emp_firstname":"Manish", "emp_lastname":"Mahajan" }
    ]
  }; 
  
  constructor() {
  }

  getHomeData() {

      // You can write here data model logic and once completed you can call Home component method to show data on HomePage. 
      // Here I have taken explicit json data.

      for(let index in this.homeData.data) {
          this.homeDataArray.push(new HomeDataModel(this.homeData.data[index]));
      }
      this.homeDataDelegate.homeDataUpdated(this.homeDataArray);    
  }
}
