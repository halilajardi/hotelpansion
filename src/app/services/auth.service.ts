import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable} from "rxjs";
import { environment } from "../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean>;
  public userData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _http : HttpClient) {
    if(localStorage.getItem('token')) {
      this.isLoggedIn = new BehaviorSubject<boolean>(true);
    } else {
      this.isLoggedIn = new BehaviorSubject<boolean>(false);
    }
  }

  public isUserLoggedIn() {
    return this.isLoggedIn.value;
  }

  public logoutUser() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }

  public loginUser(email: string, password: string): Observable<any> {
    return this._http.post<any>(environment.API_URL+"/authentication/login", {email, password} );
  }
}
