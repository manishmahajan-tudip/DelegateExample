import { HomeDataModel } from './home-data-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface HomeDataModelHelperDelegate {
    homeDataUpdated(string);
}

//This is helper class to store one by one object in data model
@Injectable()
export class HomeDataModelHelper {

  private url = "https://jsonplaceholder.typicode.com/posts";
  homeDataArray: Array<HomeDataModel> = new Array<HomeDataModel>();
  homeDataDelegate: HomeDataModelHelperDelegate;

  constructor(public _http: Http) {
  }

  getHomeData() {
      this.getHomeDataFromAPI().subscribe(data => {
        for(let index in data) {
          this.homeDataArray.push(new HomeDataModel(data[index]));
        }
        this.homeDataDelegate.homeDataUpdated(this.homeDataArray);
      })  
  }

  getHomeDataFromAPI(): Observable<any> {
    return this._http.get(this.url)
      .map(res => res.json());
  }
}
