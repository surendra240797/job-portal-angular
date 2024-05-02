import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {
    this.loggedIn = new BehaviorSubject(false);
  }

  public isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.id) {
      this.loggedIn.next(true);
      return true;
    } else {
      this.loggedIn.next(false);
      return false;
    }
  }
  public logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
  }
}
