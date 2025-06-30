import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private url = 'http://localhost:3000/api/trips';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode:string) : Observable<Trip[]> {
    //console.log('InsideTripDataService::getTrips');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    //console.log('InsideTripDataService::addTrips');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  deleteTrip(tripCode:string) : Observable<Trip[]> {
    return this.http.delete<Trip[]>(this.url + '/' + tripCode);
  }
  //deleteTrip(tripCode:string) : Observable<Trip> {
  //  return this.http.request<Trip>('delete', this.url + '/' + tripCode);
  //}
  //deleteTrip(tripCode: string): Observable<any>{
  //    return this.http.post(this.url + '/' + tripCode, tripCode, {
  //    headers: new HttpHeaders ({
   //     "Authorization": `Bearer ${this.storage.getItem('travlr-token')}`
  //  })
  //});
//};

  private handleError(error:any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  // calls login endpoint, returns JWT
  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  // calls register endpoint, creates user and returns JWT
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  // helper method to process the login and register methods
  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${'http://localhost:3000/api'}/${urlPath}`;
    return this.http
    .post(url, user)
    .toPromise()
    .then(response => response as AuthResponse)
    .catch(this.handleError);
  } 
}
