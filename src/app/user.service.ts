import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  baseUrl = environment

  constructor(public http: HttpClient, public injectable: Injectable) {
    console.log();
  }

  login(user: any) {
    return this.http.post(this.baseUrl + 'users/login', user)
  }
}
