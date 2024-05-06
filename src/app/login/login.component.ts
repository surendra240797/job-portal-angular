import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  userService: any = {};
  userLogin: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  handleLogin() {
    this.userService.login(this.userLogin).subscribe((Response: any) => {
      if (Response.status) {
        this.router.navigate(['/profile']);
        localStorage.setItem('user', JSON.stringify(Response.data));
      }
      else {
        alert('email / password doesnot match');
      }
    });

    console.log('End of handleLogin()');
  }
}
