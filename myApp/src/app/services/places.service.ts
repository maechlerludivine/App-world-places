import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Geolocation } from 'ionic-native';

const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
const ENDURL = '&radius=2500&types=bar|restaurant|food&key=AIzaSyATE_DqMHFKC-u-uV1INPrEcHVW6y8k2Aw';

@Injectable()
export class PlacesService {
  
  constructor(
    private http: Http
  ) { }

  getPlaces(latitude: number, longitude: number) {
    let headers = new Headers({ 'Content-Type': 'application/json',  }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    // return this.http.get(URL + latitude + ',' + longitude + ENDURL)
    return this.http.get("https://test-d88c1.firebaseio.com/data.json")
      .map((res: Response) => res.json());
  }
}