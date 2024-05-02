import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  handleLogin() {
    console.log(
      'Email:' + this.userLogin.email,
      'Password:' + this.userLogin.password
    );

    this.http
      .post(
        'https://1337-shrill-disk-50897621.in-ws1.runcode.io/users/login',
        this.userLogin
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response.status) {
          alert('Login Successfully');
          this.router.navigate(['/profile']);
          localStorage.setItem('user', JSON.stringify(response.data));
        } else {
          alert('Email/Password incorrect');
          //   this.ngOnInit()
        }
      });

    console.log('End of handleLogin()');
  }
}
