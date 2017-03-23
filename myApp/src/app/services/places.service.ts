import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Geolocation } from 'ionic-native';

const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
const ENDURL = '&radius=500&types=food,etablishment,point_of_interest&key=AIzaSyATE_DqMHFKC-u-uV1INPrEcHVW6y8k2Aw';

@Injectable()
export class PlacesService {
  constructor(
    private http: Http
  ) { }

  getPlaces(latitude: number, longitude: number) {
    let headers = new Headers({ 'Content-Type': 'application/json',  }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get(URL + '-33.8670522,151.1957362' + ENDURL, options)
      .map((res: Response) => res.json());
  }
}
