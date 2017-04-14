import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Geolocation } from 'ionic-native';

const URLSearch = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
const ENDURLSearch = '&radius=2500&types=bar|restaurant|food&key=AIzaSyATE_DqMHFKC-u-uV1INPrEcHVW6y8k2Aw';

const URLDetails = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
const ENDURLDetails = "&key=AIzaSyATE_DqMHFKC-u-uV1INPrEcHVW6y8k2Aw";

@Injectable()
export class PlacesService {

  constructor(
    private http: Http
  ) { }

  getPlacesList(latitude: number, longitude: number) {
    let headers = new Headers({ 'Content-Type': 'application/json', }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get(URLSearch + latitude + ',' + longitude + ENDURLSearch)
      .map((res: Response) => res.json());
  }

  getPlacesDetails(placeid: string) {
    let headers = new Headers({ 'Content-Type': 'application/json', }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get(URLDetails + placeid + ENDURLDetails)
      .map((res: Response) => res.json());
  }

}