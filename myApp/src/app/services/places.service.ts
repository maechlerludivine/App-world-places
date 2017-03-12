import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Geolocation } from 'ionic-native';


@Injectable()
export class PlacesService {
  constructor(
      private http: Http
      ) {}
  
  getPlaces() {
    return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food,etablishment,point_of_interest&key=AIzaSyB7oNFCpbf-R4qxt5-cmJCw1cn10huI12w')
      .map((res:Response) => res.json());
  }
}
