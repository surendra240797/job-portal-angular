import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = true;

  constructor(public auth: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isAuthenticated();
    this.auth.loggedIn.subscribe((loginStatus) => {
      this.isLoggedIn = loginStatus;
    });
  }

  handleLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
